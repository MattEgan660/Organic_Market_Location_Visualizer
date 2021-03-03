from splinter import Browser
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriverManager
import time 

# Setup splinter
executable_path = {'executable_path': ChromeDriverManager().install()}
browser = Browser('chrome', **executable_path, headless=False)

url = 'https://momsorganicmarket.com/all-locations/'
browser.visit(url)

html = browser.html
soup = BeautifulSoup(html, 'html.parser')

locations = soup.find_all('h4', class_='et_pb_module_header')

for location in locations: 
    mapurl = location.a['href']
    storeLoc = location.text
    print('-' * 20)
    print(storeLoc)
    print(mapurl)

    
   