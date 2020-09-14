import pandas as pd
import numpy as np

# d=pd.DataFrame(np.arange(10).reshape(2,5)) #creat from ndarray
dt={'one':pd.Series([1,2,3], index=['a','b','c']),
'two':pd.Series([9,8,7,6],index=['a','b','c','d'])}

d=pd.DataFrame(dt)

print(d)