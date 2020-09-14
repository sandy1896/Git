import matplotlib.pyplot as plt
import numpy as np

a=np.arange(0.0,7.0,0.01)
plt.plot(a,np.sin(2*np.pi*a),'r--')
plt.xlabel('横轴：时间',fontproperties='STSong',fontsize=20,color='green')
plt.ylabel('纵轴：振幅',fontproperties='STSong',fontsize=20)
plt.title(r'正弦波实例 $y=cos(2\pi x)$', fontproperties='SimHei', fontsize=25)
# plt.text(2,1,r'$\mu=100$',fontsize=15)
plt.annotate(r'$\mu=100$',xy=(2,1),xytext=(3,1.5),arrowprops=dict(facecolor='black',shrink=0.1,width=2))
plt.axis([-1,6,-2,2])
plt.grid(True)
plt.show()
