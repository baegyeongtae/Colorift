"""
This file is for converting color (RGB, HSV, Lab)
"""
import numpy as np


def rgb_to_hsv(r, g, b):
    r, g, b = r/255.0, g/255.0, b/255.0
    mx = max(r, g, b)
    mn = min(r, g, b)
    df = mx-mn
    if mx == mn:
        h = 0
    elif mx == r:
        h = (60 * ((g-b)/df) + 360) % 360
    elif mx == g:
        h = (60 * ((b-r)/df) + 120) % 360
    elif mx == b:
        h = (60 * ((r-g)/df) + 240) % 360
    if mx == 0:
        s = 0
    else:
        s = (df/mx)*100
    v = mx*100
    return h, s, v


def lab_cal(t):
    if (t > 0.008856):
        return np.power(t, 1/3.0)
    else:
        return 7.787 * t + 16 / 116.0


def rgb_to_lab(r, g, b):
  #Conversion Matrix
  matrix = [[0.412453, 0.357580, 0.180423],
            [0.212671, 0.715160, 0.072169],
            [0.019334, 0.119193, 0.950227]]

  # RGB values lie between 0 to 1.0
  rgb = [r/255, g/255, b/255]  # RGB

  cie = np.dot(matrix, rgb)

  cie[0] = cie[0] / 0.950456
  cie[2] = cie[2] / 1.088754

  # Calculate the L
  L = 116 * np.power(cie[1], 1/3.0) - \
      16.0 if cie[1] > 0.008856 else 903.3 * cie[1]

  # Calculate the a
  a = 500*(lab_cal(cie[0]) - lab_cal(cie[1]))

  # Calculate the b
  b = 200*(lab_cal(cie[1]) - lab_cal(cie[2]))

  #  Values lie between -128 < b <= 127, -128 < a <= 127, 0 <= L <= 100

  return L, a, b