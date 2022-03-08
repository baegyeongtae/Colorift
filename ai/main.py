import numpy as np
import joblib

# For measuring the inference time.
import time

from src import clothes_detector, color_extractor, color_conversion


"""Clothes detection"""
start_time = time.time()
cropped_image = clothes_detector.run_detector(
    clothes_detector.detector, 'dataset/fashion_img/2391192_1_500.jpg')
end_time = time.time()
print("Inference time:",end_time-start_time)


"""Color extraction"""
clt = color_extractor.clt
img = cropped_image

clt.fit(img.reshape(-1, 3))

hist = color_extractor.centroid_histogram(clt)

# color_extractor.show_img_compar(img, color_extractor.plot_colors(
#     hist, clt.cluster_centers_))
clothes_color = np.where(hist == max(hist))[0][0]


"""Tone prediction"""
classifier = joblib.load('model/colorfit.pkl')
scaler = joblib.load('model/scaler.pkl')

test_rgb = clt.cluster_centers_[clothes_color]
print(test_rgb)
test_hsv = np.array(color_conversion.rgb_to_hsv(
    test_rgb[0], test_rgb[1], test_rgb[2]))
print(test_hsv)
test_lab = np.array(color_conversion.rgb_to_lab(
    test_rgb[0], test_rgb[1], test_rgb[2]))
print(test_lab)
test = np.append(test_hsv[1:], test_lab)
print(test)
test = scaler.transform([test])
print(test)

answer = classifier.predict(test)
print(answer)

# distance, neighbors = classifier.kneighbors(test, 5, return_distance=True)
prob = classifier.predict_proba(test)
print(prob)
max_index = np.argmax(prob)
print(classifier.classes_[max_index], np.max(prob))