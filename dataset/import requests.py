import requests
geo_url = 'https://maps.googleapis.com/maps/api/place/textsearch/output?parameters'
parameters = {"key": "AIzaSyA5oZu4eK2KiNGypv1oaBaKPanlpulXniI", 
             "query": "Mom's Organic Market"}
response = requests.get(geo_url, params = parameters)
results = response.json()['results']

for name, value in data.json['result'].items()
my_geo = results['candidates'][1]['geometry']['location']
print("Longitude:",my_geo['lng'],"\n","Latitude:",my_geo['lat'])