from mtcnn import MTCNN
import cv2
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import numpy as np
import shutil
from tqdm.notebook import tqdm

def crop_image(image): 
    # y=box[1] h=box[3] x=box[0] w=box[2]   
    detector = MTCNN()
    data = detector.detect_faces(image)

    box = data[0]['box']  
    box[0] = 0 if box[0]<0 else box[0]
    box[1] = 0 if box[1]<0 else box[1]
    img = image[box[1]: box[1]+box[3],box[0]: box[0]+ box[2]]  
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB) # convert from bgr to rgb      
    return (True, img) 

# 이미지, 회전 각도 -> 회전 이미지 반환
def rotate_bound(image, angle):
    # 각도만큼 이미지 회전
    (h, w) = image.shape[:2]
    (cX, cY) = (w // 2, h // 2)

    # 회전 행렬(시계 방향으로 회전하는 각도 적용)을 가져오고 사인과 코사인을 가져옴.
    M = cv2.getRotationMatrix2D((cX, cY), angle, 1.0)
    cos = np.abs(M[0, 0])
    sin = np.abs(M[0, 1]) 

    nW = int((h * sin) + (w * cos))
    nH = int((h * cos) + (w * sin)) 

    # 변환을 고려하여 회전 행렬 조정
    M[0, 2] += (nW / 2) - cX
    M[1, 2] += (nH / 2) - cY 
    # 회전 이미지 반환
    return cv2.warpAffine(image, M, (nW, nH))

# 눈 사이의 기울기 계산, 회전 이미지 반환
def align(img):
    detector = MTCNN()
    data = detector.detect_faces(img)

    # 0 또는 2명 이상 얼굴이 감지됐을 때, False, None 반환
    if len(data) == 1:    
        # 각도 계산          
        keypoints = data[0]['keypoints']
        left_eye = keypoints['left_eye']
        right_eye = keypoints['right_eye']     
            
        lx, ly = left_eye        
        rx, ry = right_eye
        dx = rx - lx
        dy = ry - ly
        tan = dy / dx
        theta = np.arctan(tan)
        theta = np.degrees(theta)    
        img = rotate_bound(img, theta)        
        return (True, img)
    else:
        return (False, None)


def align_crop_resize(sdir, saving_dir, height=None, width= None): 

    os.mkdir(saving_dir)  # start with an empty destination directory

    flist = os.listdir(sdir) # get a list of the image files   
    print(len(flist)) 
    # return pprint.pprint(flist) 
    
    success_count = 0
    for i, f in tqdm(enumerate(flist)): # iterate through the image files
        fpath = os.path.join(sdir, f)     
        if os.path.isfile(fpath): #and i <10:
            # try: 
            img = cv2.cvtColor(cv2.imread(fpath), cv2.COLOR_BGR2RGB)
            status, img = align(img) # 눈이 수평이 되도록 이미지 회전
            if status: # 얼굴 detect 성공했다면, 얼굴 영역만 crop
                cstatus, img = crop_image(img) 
                if cstatus: # 얼굴 영역만 crop하는 데 성공했다면, resize, save
                    if height != None and width != None:
                        img = cv2.resize(img, (height, width)) # if height annd width are specified resize the image
                    cropped_path = os.path.join(saving_dir, f)
                    cv2.imwrite(cropped_path, img) # save the image
                    success_count += 1 # update the count of successful processed images
                else:
                    print('error in crop', f)
            else:
                print('error in align', f)
            # except:
            #     print('file ', f, ' is a bad image file')
        else:
            print("doesn't exist files")
    return success_count

def main():
    categories = ['spring', 'summer', 'autumn', 'winter']
    # height = 128
    # width = 128

    if os.path.isdir(r'/mnt/prep_data'):
        shutil.rmtree(r'/mnt/prep_data')
    os.mkdir(r'/mnt/prep_data')

    for cat in categories:
        # input data directory
        print('start')
        # break
        sdir = os.path.join(r'/mnt/data', cat) 

        # output data directory saving
        saving_dir = os.path.join(r'/mnt/prep_data', cat)
        count = align_crop_resize(sdir, saving_dir)
        print ('Number of sucessfully processed images= ', count)

if __name__ == '__main__':
    main()