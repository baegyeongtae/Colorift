"""시각화 코드"""

from matplotlib.colors import ListedColormap
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import seaborn as sns

from color_fit import dataset, X, y


sns.scatterplot(data=dataset, x="L", y="a", hue='Class', legend="full")


fontlabel = {"fontsize": "large", "color": "gray", "fontweight": "bold"}

# fig = plt.figure(figsize=(10, 5))
# ax = fig.add_subplot(111, projection='3d') # Axe3D object

h = X[:, 0]
s = X[:, 1]
v = X[:, 2]
L = X[:, 3]
a = X[:, 4]
b = X[:, 5]

color = []

for tone in y:
  if tone == 'spring':
    color.append(0)
  elif tone == 'summer':
    color.append(1)
  elif tone == 'fall':
    color.append(2)
  elif tone == 'winter':
    color.append(3)
  else:
    raise ValueError

# axes instance
fig = plt.figure(figsize=(6, 6))
ax = Axes3D(fig)
fig.add_axes(ax)

# get colormap from seaborn
cmap = ListedColormap(sns.color_palette("husl"))

# plot
sc = ax.scatter(L, s, b, s=40, c=color, marker='o', cmap=cmap, alpha=1)
ax.set_xlabel('L')
ax.set_ylabel('s')
ax.set_zlabel('b')

# legend
plt.legend(*sc.legend_elements(), bbox_to_anchor=(1.05, 1), loc=2)

plt.title("ax.scatter")

# save
plt.savefig(
    './visual/3dplotting_scattering.svg', bbox_inches='tight')

plt.show()