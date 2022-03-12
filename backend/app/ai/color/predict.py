import os
import keras
import numpy as np
import tensorflow as tf
import cv2 as cv

from app.apps import LoadConfig

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'


def predict_color(file):
    """
    Personal Color Diagnosis
    """
    nparr = np.fromstring(file.read(), np.uint8)
    img = cv.imdecode(nparr, cv.IMREAD_COLOR)
    img = cv.resize(img, dsize=(160, 160), interpolation=cv.INTER_AREA)
    img = np.expand_dims(img, axis=0)

    probability_model = tf.keras.Sequential([LoadConfig.mobilenet_v2, tf.keras.layers.Softmax()])
    pred_class = probability_model.predict(img)

    result = pred_class[0]
    result = list(map(lambda x: round(x * 100), result))

    # result = ['autumn', 'spring', 'summer', 'winter'] 순서로 저장됨.
    data = {'spring_rate': result[1],'summer_rate':result[2],'autumn_rate':result[0],'winter_rate':result[3]}

    return data
