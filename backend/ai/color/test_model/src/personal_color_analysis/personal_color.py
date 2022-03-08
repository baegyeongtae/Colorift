import cv2
import numpy as np
from . import tone_analysis
from .detect_face import DetectFace
from .color_extract import DominantColors
from colormath.color_objects import LabColor, sRGBColor, HSVColor
from colormath.color_conversions import convert_color


def analysis(img):
    #######################################
    #           Face detection            #
    #######################################
    df = DetectFace(img)
    face = [df.left_cheek, df.right_cheek,
            df.left_eyebrow, df.right_eyebrow,
            df.left_eye, df.right_eye]

    #######################################
    #         Get Dominant Colors         #
    #######################################
    temp = []
    clusters = 4
    for f in face:
        dc = DominantColors(f, clusters)
        face_part_color, _ = dc.getHistogram()
        # dc.plotHistogram()
        temp.append(np.array(face_part_color[0]))
    cheek = np.mean([temp[0], temp[1]], axis=0)
    eyebrow = np.mean([temp[2], temp[3]], axis=0)
    eye = np.mean([temp[4], temp[5]], axis=0)

    Lab_b, hsv_s = [], []
    color = [cheek, eyebrow, eye]
    for i in range(3):
        rgb = sRGBColor(color[i][0], color[i][1], color[i][2], is_upscaled=True)
        lab = convert_color(rgb, LabColor, through_rgb_type=sRGBColor)
        hsv = convert_color(rgb, HSVColor, through_rgb_type=sRGBColor)
        Lab_b.append(float(format(lab.lab_b, ".2f")))
        hsv_s.append(float(format(hsv.hsv_s, ".2f"))*100)

    # print('Lab_b[skin, eyebrow, eye]', Lab_b)
    # print('hsv_s[skin, eyebrow, eye]', hsv_s)
    #######################################
    #      Personal color Analysis        #
    #######################################
    Lab_weight = [30, 20, 5]
    hsv_weight = [10, 1, 1]
    if(tone_analysis.is_warm(Lab_b, Lab_weight)):
        if(tone_analysis.is_spr(hsv_s, hsv_weight)):
            tone = 'SP'
        else:
            tone = 'FA'
    else:
        if(tone_analysis.is_smr(hsv_s, hsv_weight)):
            tone = 'SU'
        else:
            tone = 'WI'

    return tone
