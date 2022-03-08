import numpy as np

# For measuring the inference time.
import time

from clothes_detector import run_detector, detector

from color_extractor import clt, centroid_histogram, show_img_compar, plot_colors

from color_fit import rgb_to_hsv, scaler, classifier


"""Clothes detection"""
start_time = time.time()
cropped_image = run_detector(detector, 'dataset/fashion_img/2391192_1_500.jpg')
end_time = time.time()
print("Inference time:",end_time-start_time)


"""Color extraction"""
img = cropped_image

clt.fit(img.reshape(-1, 3))

hist = centroid_histogram(clt)

show_img_compar(img, plot_colors(hist, clt.cluster_centers_))
clothes_color = np.where(hist == max(hist))[0][0]


"""Tone prediction"""

test_rgb = clt.cluster_centers_[clothes_color]
print(test_rgb)
test_hsv = np.array(rgb_to_hsv(test_rgb[0], test_rgb[1], test_rgb[2]))
print(test_hsv)
test = scaler.transform([test_hsv])
print(test)
answer = classifier.predict(test)

print(answer)
prob = classifier.predict_proba(test)
max_index = np.argmax(prob)
print(classifier.classes_[max_index], np.max(prob))
