import pandas as pd
import numpy as np

url = 'csvAsset/kr_regional_daily.csv'
data = pd.read_csv(url, error_bad_lines=False)
data['date'] = pd.to_datetime(data['date'], format='%Y%m%d')

data.head()

df_seoul = data[data['region'] == '서울']
df_seoul = np.column_stack([df_seoul.date, df_seoul.confirmed])
