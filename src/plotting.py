import csv
import json

csv_file = 'M2.csv'
json_file = 'M2.json'


data=[]
with open (csv_file ,'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        data.append(row)

with open(json_file , 'w') as f:
    json.dump(data, f, indent=2)

print(f'CSV file "{csv_file}" successfully converted to JSON file "{json_file}".')