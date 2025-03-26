import pandas as pd

country = pd.DataFrame(
    data=[[2000, 'Ohio', 1.5],
    [2001, 'Ohio', 1.7],
    [2002, 'Ohio', 3.6],
    [2001, 'Nevada', 2.4],
    [2002, 'Nevada', 2.9]],
    columns=['year', 'state', 'pop'],
    index=[0, 1, 2, 3, 4]
)

print()
print()
print(country)

to_add =['value1', 'value2', 'value3', 'value4', 'value5']
country.insert(3, 'col 4', to_add)

print()
print()
print(country)
print()