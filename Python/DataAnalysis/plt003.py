import matplotlib.pyplot as plt
import numpy as np
# import matplotlib

# matplotlib.rcParams['font.family']='SimHei'
a=np.arange(10)
plt.plot(a,a*1.5,'go-',a,np.cos(a),'rx',a,np.sin(a),'*',a,a*1,'b-.')
plt.ylabel('纵轴（值）',fontproperties='STSong',fontsize=20)
plt.show()
