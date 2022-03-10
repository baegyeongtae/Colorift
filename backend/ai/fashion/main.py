import numpy as np
import joblib


from .src import clothes_detector, color_extractor, color_conversion


def main(color, img):
    """Clothes detection"""
    cropped_image = clothes_detector.run_detector(img)

    """Color extraction"""
    test_rgb = color_extractor.run_extractor(cropped_image)
    test_hsv = np.array(color_conversion.rgb_to_hsv(
        test_rgb[0], test_rgb[1], test_rgb[2]))
    test_lab = np.array(color_conversion.rgb_to_lab(
        test_rgb[0], test_rgb[1], test_rgb[2]))
    test = np.append(test_hsv[1:], test_lab)

    """Tone prediction"""
    classifier = joblib.load('model/colorfit.pkl')
    scaler = joblib.load('model/scaler.pkl')

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

    print(answer, result_prob)
    res = {
        'spring_rate': result_prob[0],
        'summer_rate': result_prob[1],
        'autumn_rate': result_prob[2],
        'winter_rate': result_prob[3]
    }
    return {'spring_rate': 40, 'summer_rate': 30, 'autumn_rate': 20, 'winter_rate': 10, 'result': 'G'}
    return answer, res


if __name__ == "__main__":
    main(clothes_detector.load_img(
        './dataset/fashion_img/2391192_1_500.jpg'))
