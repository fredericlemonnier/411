from django.shortcuts import render

# Create your views here.
from rest_framework_mongoengine import viewsets

from .serializers import UserSerializer
from .models import User

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

import requests
from django.http import HttpResponse
from django.shortcuts import *
import json
from bson import json_util

# class UserViewSet(viewsets.ModelViewSet):
#     # queryset = User.objects.all()
#     serializer_class = UserSerializer
#     def get_queryset(self):
#         return User.objects.all()

apiKey = 'jKsDaQ4sGAM4QNtXLDWyODCVJWKpHxZnVLasy9Dsm6Ly15IzINJqLTZVNFck'

@csrf_exempt
def getBreweries(request):
    ''' master function to get the list of breweries closest to the stadium'''
    table = {
        "team1_logo": None,
        "team2_logo": None,
        "team1_name" : None,
        "team2_name" : None,
        "breweries": [],
        "game_time": None,
        "venue_name": None,
        "venue_address": None,
        "venue_city": None
    }

    # obtain user input
    inputs = request.read().decode("utf-8")
    team_end = inputs.index(",")
    team1 = inputs[9:team_end-1]
    date = inputs[team_end+9:-2]

    ## Get the list of breweries ##
    # get the team1 id
    team1_id_url = f'https://api.sportmonks.com/v3/football/teams/search/{team1}?api_token={apiKey}'
    r_team1_id = requests.get(url=team1_id_url).json()
    team1_id = r_team1_id['data'][0]['id']
    table['team1_name'] = team1

    # get the venue id
    venue_id_url = f'https://api.sportmonks.com/v3/football/fixtures/between/{date}/{date}/{team1_id}?api_token={apiKey}'
    r_fixture = requests.get(url=venue_id_url).json()
    venue_id = r_fixture['data'][0]['venue_id']

    #  call function to get coordinates of the venue
    coordinates_url = f'https://api.sportmonks.com/v3/football/venues/{venue_id}?api_token={apiKey}'
    r_coord = requests.get(url=coordinates_url).json()
    latitude = r_coord['data']['latitude']
    longitude = r_coord['data']['longitude']

    # call function to get the list of breweries
    # breweries_url = f'https://api.openbrewerydb.org/breweries?by_dist={latitude},{longitude}&per_page=5'
    # r_brews = requests.get(url=breweries_url)
    # table['breweries'] = r_brews.json()
    url = f'https://api.yelp.com/v3/businesses/search?latitude={latitude}&longitude={longitude}&term=brewery&sort_by=distance&limit=5'

    headers = {
    "accept": "application/json",
    "Authorization": "Bearer RUokdExOM83iErtvL1Rsm736PNgFz0sNojJ-WLxA0Rtn_yQ1lZ5KN0Yo08DzZljkTrXa8wYXflJ_uVdsQ8zDSAJnvoXk6AS56WVUDFezwuyTEouw8VI7pY3UTiuIY3Yx"
    }

    new_response = requests.get(url, headers=headers)
    new_response = new_response.json()["businesses"]
    breweries = []
  
    for i in range(5):
        pub_details = {
            "name":new_response[i]['name'],
            "address": new_response[i]['location']['address1'],
            "city":new_response[i]['location']['city'],
            "rating": new_response[i]['rating'],
            "url":new_response[i]['url'],
            "phone":new_response[i]['phone'],
        }   
        breweries.append(pub_details)
    table['breweries'] = breweries

    ## get the team logos ##
    # get team1 logo
    table['team1_logo'] = r_team1_id['data'][0]['image_path']

    # get team2 name
    game = r_fixture['data'][0]['name']
    teams = game.split(" vs ")
    team2_index = 0
    if team1 in teams[0]:
        team2_index = 1
    team2 = teams[team2_index]

    # get team2 logo
    team2_id_url = f'https://api.sportmonks.com/v3/football/teams/search/{team2}?api_token={apiKey}'
    r_team2_id = requests.get(url=team2_id_url).json()
    table['team2_logo'] = r_team2_id['data'][0]['image_path']
    table['team2_name'] = team2

    ## get game time info ##
    table['game_time'] = r_fixture['data'][0]['starting_at']

    ## get the venue info ##
    table['venue_name'] = r_coord['data']['name']
    table['venue_address'] = r_coord['data']['address']
    table['venue_city'] = r_coord['data']['city_name']

    # return the dictionary containing all the data
    return HttpResponse(json.dumps(table))

import pymongo
connect_string = 'mongodb+srv://cs411:Password123@cs411.0suyfaw.mongodb.net/?retryWrites=true&w=majority'
from django.conf import settings
my_client = pymongo.MongoClient(connect_string)

# First define the database name
dbname = my_client['user']

# Now get/create collection name (remember that you will see the database in your mongodb cluster only after you create a collection
collection_name = dbname["userdetails"]


@csrf_exempt
def signup(request):
    inputs = request.read().decode("utf-8")
    inputs = inputs.split(',')
    collection_name.insert_one({'name': inputs[0][9:-1], 'email':inputs[1][9:-1], 'password':inputs[2][12:-2]})
    return HttpResponse(inputs)

@csrf_exempt
def login(request):
    inputs = request.read().decode("utf-8")
    inputs = inputs.split(',')
    # name = inputs[0][9:-1]
    # email = inputs[1][9:-1]
    name = inputs[0][9:-1]
    # user = collection_name.find({'name': {name}})
    # user_data = json_util.dumps(list(user))
    #check that the username exists in out mongodb database
    user = collection_name.find({"name": str(name)})
    return HttpResponse(json_util.dumps(list(user)))



