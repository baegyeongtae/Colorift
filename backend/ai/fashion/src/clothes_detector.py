# For running inference on the TF-Hub module.
import tensorflow as tf

import tensorflow_hub as hub

from src import display_crop_image

# For measuring the inference time.
import time

module_handle = "https://tfhub.dev/google/faster_rcnn/openimages_v4/inception_resnet_v2/1"

detector = hub.load(module_handle).signatures['default']


def load_img(path):
    img = tf.io.read_file(path)
    img = tf.image.decode_jpeg(img, channels=3)
    return img


def run_detector(detector, path):
    img = load_img(path)

    converted_img = tf.image.convert_image_dtype(img, tf.float32)[
        tf.newaxis, ...]
    result = detector(converted_img)

    result = {key: value.numpy() for key, value in result.items()}

    _, cropped_image = display_crop_image.draw_boxes(
        img.numpy(), result["detection_boxes"],
        result["detection_class_entities"], result["detection_scores"])

    return cropped_image
