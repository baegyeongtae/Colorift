import numpy as np
import keras
import os
from keras.preprocessing import image
import tensorflow as tf
import cv2 as cv
from tensorflow.keras.preprocessing.image import img_to_array
import time 
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
# warning 제거

def predict_color(file):
    nparr = np.fromstring(file.read(), np.uint8)
    img = cv.imdecode(nparr, cv.IMREAD_COLOR)
    img = cv.resize(img, dsize=(160, 160), interpolation=cv.INTER_AREA)
    print(type(img))
    #img = img_to_array(img)
    print(type(img))
    img = np.expand_dims(img, axis=0)
    # print(img.shape)
    
    # print(os.getcwd())
    model_path = '/app/ai/color/models/mobilenet_v2.h5'
    # print(model_path)

    mobilenet_v2 = keras.models.load_model(model_path)
    probability_model = tf.keras.Sequential([mobilenet_v2, 
                                            tf.keras.layers.Softmax()])

    pred_class = probability_model.predict(img)
    
    # autum
    result = pred_class[0]
    data = {'spring_rate': result[1],'summer_rate':result[2],'autumn_rate':result[0],'winter_rate':result[3]}
    return data


if __name__ == '__main__':
    predict_color()