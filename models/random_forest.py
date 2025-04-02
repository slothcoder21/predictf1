import numpy as np
import pandas as pd

from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LinearRegression


circuit_data = pd.read_csv('../datasets/circuits.csv')
qualifying_data = pd.read_csv('../datasets/qualifying.csv')
constructor_data = pd.read_csv('../datasets/constructors.csv')
driver_data = pd.read_csv('../datasets/drivers.csv')
race_data = pd.read_csv('../datasets/races.csv')
results_data = pd.read_csv('../datasets/results.csv')

df1 = pd.merge(race_data,results_data,how='inner', on=['raceId'])
df2 = pd.merge(df1,qualifying_data,how='inner', on=['raceId','driverId, constructorId'])
df3 = pd.merge(df2, driver_data, how='inner', on=['driverId'])
df4 = pd.merge(df3, constructor_data, how='inner', on=['constructorId'])

df4.drop(['url_x', 'url_y'], axis=1, replace=True)

df5 = pd.merge(df4, circuit_data, how='inner', on=['circuitId'])










# %%
