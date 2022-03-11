# -*- coding: utf-8 -*-
"""
Created on Sat Jun 22 16:01:13 2019

@author: Wei-Hsiang, Shen
"""

import numpy as np
import tensorflow as tf


def Detect_Clothes(img, model_yolov3, eager_execution=True):
    img = tf.image.resize(img, (416, 416))

    if eager_execution:
        boxes, scores, classes, nums = model_yolov3(img)
        # change eager tensor to numpy array
        boxes, scores, classes, nums = boxes.numpy(), scores.numpy(), classes.numpy(), nums.numpy()
    else:
        boxes, scores, classes, nums = model_yolov3.predict(img)

    class_names = ['short_sleeve_top', 'long_sleeve_top', 'short_sleeve_outwear', 'long_sleeve_outwear',
                  'vest', 'sling', 'shorts', 'trousers', 'skirt', 'short_sleeve_dress',
                  'long_sleeve_dress', 'vest_dress', 'sling_dress']

    # Parse tensor
    list_obj = []
    for i in range(nums[0]):
        obj = {'label':class_names[int(classes[0][i])], 'confidence':scores[0][i]}
        obj['x1'] = boxes[0][i][0]
        obj['y1'] = boxes[0][i][1]
        obj['x2'] = boxes[0][i][2]
        obj['y2'] = boxes[0][i][3]
        list_obj.append(obj)

    return list_obj

def Detect_Clothes_and_Crop(img_tensor, model, threshold=0.5):
    list_obj = Detect_Clothes(img_tensor, model)

    img = np.squeeze(img_tensor.numpy())
    img_width = img.shape[1]
    img_height = img.shape[0]
    img_crop = img
    highest = threshold

    # crop out one clothes
    for obj in list_obj:
        if obj['confidence']>highest:
            img_crop = img[int(obj['y1']*img_height):int(obj['y2']*img_height), int(obj['x1']*img_width):int(obj['x2']*img_width), :]
            highest = obj['confidence']

    return img_crop