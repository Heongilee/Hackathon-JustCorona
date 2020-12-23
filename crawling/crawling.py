# -*- coding: utf-8 -*-  
import pandas as pd
import requests
from bs4 import BeautifulSoup
import csv
import json

max_article = 3

raw = requests.get("https://search.naver.com/search.naver?where=news&query=코로나 백신")

dataset = list()
html = BeautifulSoup(raw.text, "html.parser")
for i in range(max_article):
  news_titles = html.select('.news_tit')[i]['title']
  # print('기사 제목', news_titles)
  news_content = html.select('.api_txt_lines.dsc_txt_wrap')[i]
  # print('기사 내용', news_content.text)
  news_link = html.select('.news_tit')[i]['href']
  print()
  dataset.append([news_titles,news_content.text,news_link])



df = pd.DataFrame(dataset,columns=['Title','Content','URL'])        
df.to_csv("./corona.csv", encoding='utf8')

def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
      
    #read csv file
    with open(csvFilePath, encoding='utf-8') as csvf: 
        #load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf) 

        #convert each csv row into python dict
        for row in csvReader: 
            #add this python dict to json array
            jsonArray.append(row)
  
    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(jsonArray, ensure_ascii=False, indent=4)
        jsonf.write(jsonString)
          
csvFilePath = r'corona.csv'
jsonFilePath = '../public/Hackathon-JustCorona-master/corona1.json'
csv_to_json(csvFilePath, jsonFilePath)
