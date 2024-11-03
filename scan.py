import sys
import requests

url = sys.argv[1]
entered_url= "https://"+url
response= requests.get(entered_url)
domain ="entered_url"
headers =requests.get(domain).headers

if "X-Frame-options" in headers:
    pass
else:
    print (domain + "vunerable")
print (headers)