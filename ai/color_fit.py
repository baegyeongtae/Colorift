"""색상 데이터셋"""

from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
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


col_names = ['R', 'G', 'B', 'Class']

dataset = pd.read_csv('./dataset/colorset_tone.CSV',
                      encoding='UTF-8', header=None, names=col_names)

print(dataset.shape)  # (row개수, column개수)
print(dataset.info())  # 데이터 타입, row 개수, column 개수, 컬럼 데이터 타입
print(dataset.describe())  # 요약 통계 정보

# HSV 값 추가
H = pd.Series([])
S = pd.Series([])
V = pd.Series([])

for i in range(len(dataset)):
  HSV = rgb_to_hsv(dataset["R"][i], dataset["G"][i], dataset["B"][i])
  H[i] = HSV[0]
  S[i] = HSV[1]
  V[i] = HSV[2]

dataset.insert(3, "H", H)
dataset.insert(4, "S", S)
dataset.insert(5, "V", V)

# Lab 값 추가
L = pd.Series([])
a = pd.Series([])
b = pd.Series([])

for i in range(len(dataset)):
  Lab = rgb_to_lab(dataset["R"][i], dataset["G"][i], dataset["B"][i])
  L[i] = round(Lab[0], 6)
  a[i] = round(Lab[1], 6)
  b[i] = round(Lab[2], 6)

dataset.insert(6, "L", L)
dataset.insert(7, "a", a)
dataset.insert(8, "b", b)


# DataFrame을 np.ndarray로 변환
X = dataset.iloc[:, 3:-1].to_numpy()  
y = dataset.iloc[:, -1].to_numpy()


# 전체 데이터 세트를 학습 세트(training set)와 검증 세트(test set)로 나눔
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
print(len(X_train), len(X_test))

# 거리 계산을 위해서 각 특성들을 스케일링(표준화)
# Z-score 표준화: 평균을 0, 표준편차 1로 변환
scaler = StandardScaler()  # Scaler 객체 생성
scaler.fit(X_train)  # 스케일링(표준화)를 위한 평균과 표준 편차 계산
X_train = scaler.transform(X_train)  # 스케일링(표준화 수행)
X_test = scaler.transform(X_test)

# 스케일링(z-score 표준화 수행 결과 확인)
for col in range(3):
    print(f'평균 = {X_train[:, col].mean()}, 표준편차= {X_train[:, col].std()}')

for col in range(3):
    print(f'평균 = {X_test[:, col].mean()}, 표준편차= {X_test[:, col].std()}')

# 최적의 K
errors = []
for i in range(1, 31):
    knn = KNeighborsClassifier(n_neighbors=i)
    knn.fit(X_train, y_train)
    pred_i = knn.predict(X_test)
    errors.append(np.mean(pred_i != y_test))

n_neighbors = errors.index(min(errors))+1
print(n_neighbors)

# k-NN 분류기를 생성
classifier = KNeighborsClassifier(n_neighbors=n_neighbors)
# 분류기 학습
classifier.fit(X_train, y_train)

# 예측
y_pred = classifier.predict(X_test)

print(classifier.score(X_test, y_test))
