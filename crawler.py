import tweepy
import json
import time
####input your credentials here
consumer_key = ''
consumer_secret = ''
access_token = ''
access_token_secret = ''

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth,wait_on_rate_limit=True)
#####United Airlines
# Open/Create a file to append data

candidates = ["lopezobrador_","ricardoanayac","joseameadek","Mzavalagc","JaimeRdzNL","_Huguez"]

json_file = {}

while True:
    for candidate in candidates:
        user = api.get_user(candidate)
        json_file[candidate] = user.followers_count

        with open('public/json/twitter-candidatos-seguidores.json', 'w') as outfile:
            json.dump(json_file, outfile)
    time.sleep(60)
    print("actualizando")

print ("finished")
