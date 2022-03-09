# For running inference on the TF-Hub module.
import tensorflow as tf

import tensorflow_hub as hub

from . import display_crop_image


module_handle = "https://tfhub.dev/google/faster_rcnn/openimages_v4/inception_resnet_v2/1"
detector = hub.load(module_handle).signatures['default']


def load_img(path):
    img = tf.io.read_file(path)
    img = tf.image.decode_jpeg(img, channels=3)
    return img


def run_detector(img):

    img = tf.image.decode_jpeg(img, channels=3)

    converted_img = tf.image.convert_image_dtype(img, tf.float32)[
        tf.newaxis, ...]
    result = detector(converted_img)

    result = {key: value.numpy() for key, value in result.items()}

    cropped_image = display_crop_image.draw_boxes(
        img.numpy(), result["detection_boxes"],
        result["detection_class_entities"], result["detection_scores"])

    return cropped_image
