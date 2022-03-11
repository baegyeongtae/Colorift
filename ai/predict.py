import numpy as np
import keras
import os
from keras.preprocessing import image
import tensorflow as tf
from tensorflow.keras.preprocessing.image import img_to_array
import time 
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '0'
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
# warning 제거

def predict_class(img):
    img = img_to_array(img)
    img = np.expand_dims(img, axis=0)
    # print(img.shape)
    
    # print(os.getcwd())
    model_path = '/home/team13/colorfit/ai/models/mobilenet_v2.h5'
    # print(model_path)

    mobilenet_v2 = keras.models.load_model(model_path)
    probability_model = tf.keras.Sequential([mobilenet_v2, 
                                            tf.keras.layers.Softmax()])

    pred_class = probability_model.predict(img)
    
    return pred_class[0]

def main():
    start = time.time() 

    img=image.load_img('/mnt/data/origin/spring/naver_0005.jpg', target_size=(160, 160))
    result = predict_class(img)
    print(result)
    
    end = time.time()
    print(f"{end - start:.5f} sec")

if __name__ == '__main__':
    main()