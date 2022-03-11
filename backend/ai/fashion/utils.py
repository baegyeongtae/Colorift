# -*- coding: utf-8 -*-
"""
Created on Sat Jun 22 16:14:17 2019

@author: Wei-Hsiang, Shen
"""

import numpy as np
import time
import tensorflow as tf
import cv2

from .yolov3_tf2.models import YoloV3


def Read_Img_2_Tensor(img_path):
    img_raw = tf.io.read_file(img_path)
    img = tf.image.decode_image(img_raw, channels=3, dtype=tf.dtypes.float32)
    img = tf.expand_dims(img, 0) # fake a batch axis

    return img

def Load_DeepFashion2_Yolov3():
    t1 = time.time()
    model = YoloV3(classes=13)
    model.load_weights('/app/ai/fashion/built_model/deepfashion2_yolov3')
    t2 = time.time()
    print('Load DeepFashion2 Yolo-v3 from disk: {:.2f} sec'.format(t2 - t1))

    return model

def Save_Image(image_array, save_path):
    if image_array.dtype == 'float32':
        cv2.imwrite(save_path, cv2.cvtColor(image_array, cv2.COLOR_RGB2BGR)*255)
    elif image_array.dtype == 'uint8':
        cv2.imwrite(save_path, cv2.cvtColor(image_array, cv2.COLOR_RGB2BGR))
    else:
        raise ValueError('Unrecognize type of image array: {}', image_array.dtype)