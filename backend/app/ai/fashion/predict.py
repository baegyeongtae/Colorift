import numpy as np
import tensorflow as tf

from app.apps import LoadConfig

from . import clothes_detector
from . import color_extractor
from . import color_conversion

from .yolov3_tf2 import YoloV3 


def Load_DeepFashion2_Yolov3():
    model = YoloV3(classes=13)
    model.load_weights('/app/app/ai/fashion/models/deepfashion2_yolov3')

    return model


def predict_fashion(color, file):
    """
    Clothes detection
    """
    model = Load_DeepFashion2_Yolov3()

    img = tf.image.decode_image(file.read(), channels=3, dtype=tf.dtypes.float32)
    img_tensor = tf.expand_dims(img, 0)  
    cropped_image = clothes_detector.Detect_Clothes_and_Crop(img_tensor, model)

    """
    Color extraction
    """
    cropped_image *= 255
    cropped_image = cropped_image.astype(np.uint8)

    test_rgb = color_extractor.run_extractor(cropped_image)
    test_hsv = np.array(color_conversion.rgb_to_hsv(
        test_rgb[0], test_rgb[1], test_rgb[2]))
    test_lab = np.array(color_conversion.rgb_to_lab(
        test_rgb[0], test_rgb[1], test_rgb[2]))
    test = np.append(test_hsv[1:], test_lab)

    """
    Tone prediction
    """
    test = LoadConfig.scaler.transform([test])
    prob = LoadConfig.classifier.predict_proba(test)[0]
    classname = LoadConfig.classifier.classes_
    
    """
    Process for return result
    """
    data = {}
    for i in range(4):
        if classname[i] == "spring":
            data['spring_rate'] = round(prob[i] * 100)
        elif classname[i] == "summer":
            data['summer_rate'] = round(prob[i] * 100)
        elif classname[i] == "fall":
            data['autumn_rate'] = round(prob[i] * 100)
        elif classname[i] == "winter":
            data['winter_rate'] = round(prob[i] * 100)

    color_to_rate = {
        'SP':'spring_rate', 
        'SU':'summer_rate', 
        'AU':'autumn_rate', 
        'WI':'winter_rate'
    }
    
    if 0 <= data[color_to_rate[color]] < 30:
        data['result'] = 'B'
    elif 30 <= data[color_to_rate[color]] < 60:
        data['result'] = 'S'
    elif 60 <= data[color_to_rate[color]]:
        data['result'] = 'G'
    
    return data
