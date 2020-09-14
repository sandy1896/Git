#encoding=gbk

from random import random
from math import sqrt
from time import process_time

DARTS=int(2e7)
hits=0
process_time()
for i in range(1,DARTS):
    x,y=random(),random()
    dist=sqrt(x**2+y**2)
    if dist<=1:
        hits=hits+1
pi=4*(hits/DARTS)
print("pi��ֵ��%s" %pi)
print("�������е�ʱ����%-5.5ss" %process_time())