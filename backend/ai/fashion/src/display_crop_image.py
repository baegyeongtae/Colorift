# For downloading the image.
import matplotlib.pyplot as plt

# For drawing onto the image.
import numpy as np
from PIL import Image


def display_image(image):
    fig = plt.figure(figsize=(20, 15))
    plt.grid(False)
    plt.imshow(image)


def crop_image(image, ymin, xmin, ymax, xmax):
    im_width, im_height = image.size
    (left, top, right, bottom) = (xmin * im_width,
                                  ymin * im_height,
                                  xmax * im_width,
                                  ymax * im_height)
    crop_img = image.crop((left, top, right, bottom))
    return crop_img


def draw_boxes(image, boxes, class_names, scores, max_boxes=10, min_score=0.1):

    for i in range(min(boxes.shape[0], max_boxes)):
        # clothes = ("Shirt", "Trousers", "Clothing")
        if scores[i] >= min_score:
            if class_names[i].decode("ascii") == "Clothing":
                ymin, xmin, ymax, xmax = tuple(boxes[i])
                image_pil = Image.fromarray(np.uint8(image)).convert("RGB")
                cropped = np.array(crop_image(image_pil, ymin, xmin, ymax, xmax))

                return cropped

    return image
