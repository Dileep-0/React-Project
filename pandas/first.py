import pandas as pd

df=pd.read_csv('M2.csv')

json_df = df.to_json(orient='records')

print(json_df)