from personal_color_analysis import personal_color
import cv2

def main():
    # sample image
    imgpath = './res/sample.jpg'
    img = cv2.imread(imgpath)

    personal_result = personal_color.analysis(img)
    print(personal_result)

if __name__ == '__main__':
    main()
