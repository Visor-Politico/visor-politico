import tweepy
import json
import time
####input your credentials here
consumer_key = 'WbaP94BKvPV0onNipttz8GxJh'
consumer_secret = 'sA3vrhAaUeHNKWDUHsbyURjRhjNIXrzw4Ns1buSnxIvrST4L42'
access_token = '2691538652-PLw61qVoUYHcAE2HiFN0FunRC9tVAcy5PgYC6nO'
access_token_secret = 'MjCh36tExJBtASapozPnlB3T2dhOZbqjLwzqTw0EsSYVO'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth,wait_on_rate_limit=True)

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
