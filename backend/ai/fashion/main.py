import numpy as np
import joblib
import time
import tensorflow as tf


from . import clothes_detector
from . import color_extractor
from . import color_conversion
from . import utils


def main(color, file):
    """Clothes detection"""
    model = utils.Load_DeepFashion2_Yolov3()

    img = tf.image.decode_image(file.read(), channels=3, dtype=tf.dtypes.float32)
    img_tensor = tf.expand_dims(img, 0)  # fake a batch axis

    # backend랑 input 맞춰야함.
    # img_tensor = utils.Read_Img_2_Tensor(img)
    cropped_image = clothes_detector.Detect_Clothes_and_Crop(img_tensor, model)

    """Color extraction"""
    cropped_image *= 255
    cropped_image = cropped_image.astype(np.uint8)

    test_rgb = color_extractor.run_extractor(cropped_image)
    test_hsv = np.array(color_conversion.rgb_to_hsv(
        test_rgb[0], test_rgb[1], test_rgb[2]))
    test_lab = np.array(color_conversion.rgb_to_lab(
        test_rgb[0], test_rgb[1], test_rgb[2]))
    test = np.append(test_hsv[1:], test_lab)

    """Tone prediction"""
    classifier = joblib.load('./built_model/colorfit.pkl')
    scaler = joblib.load('./built_model/scaler.pkl')

    test = scaler.transform([test])
    answer = classifier.predict(test)[0]

    # distance, neighbors = classifier.kneighbors(test, 5, return_distance=True)
    prob = classifier.predict_proba(test)[0]
    classname = classifier.classes_

    result_prob = [0, 0, 0, 0]
    for i in range(4):
        if classname[i] == "spring":
            result_prob[0] = prob[i] * 100
        elif classname[i] == "summer":
            result_prob[1] = prob[i] * 100
        elif classname[i] == "fall":
            result_prob[2] = prob[i] * 100
        elif classname[i] == "winter":
            result_prob[3] = prob[i] * 100

    if answer == "spring":
        answer = "SP"
    elif answer == "summer":
        answer = "SU"
    elif answer == "fall":
        answer = "AU"
    elif answer == "winter":
        answer = "WI"

    res = {
        'spring_rate': result_prob[0],
        'summer_rate': result_prob[1],
        'autumn_rate': result_prob[2],
        'winter_rate': result_prob[3]
    }

    return {'spring_rate': round(result_prob[0]), 'summer_rate': round(result_prob[1]), 'autumn_rate': round(result_prob[2]), 'winter_rate': round(result_prob[3]), 'result': 'G'}

    return answer, res


if __name__ == "__main__":
    img_path = './images/1811945_6_500.jpg'
    img_tensor = utils.Read_Img_2_Tensor(img_path)

    main(0, img_tensor)
