"""주요 색상 뽑기"""

from sklearn.cluster import KMeans
import cv2 as cv
import matplotlib.pyplot as plt
import numpy as np


clt = KMeans(n_clusters=5)

def centroid_histogram(clt):
    # grab the number of different clusters and create a histogram
    # based on the number of pixels assigned to each cluster
    numLabels = np.arange(0, len(np.unique(clt.labels_)) + 1)
    (hist, _) = np.histogram(clt.labels_, bins=numLabels)

    # normalize the histogram, such that it sums to one
    hist = hist.astype("float")
    hist /= hist.sum()

    # return the histogram
    return hist


def run_extractor(img):
    clt.fit(img.reshape(-1, 3))
    hist = centroid_histogram(clt)
    clothes_color = np.where(hist == max(hist))[0][0]
    
    return clt.cluster_centers_[clothes_color]