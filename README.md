# CS411 Section A5 Team 8  Team members: Alyssa, Jordan, Frederic, Dongyue Xu, Yash
CS411 Group Project proposal
Project topic: Soccer Match Brewery Finder

The idea is that the user inputs a soccer game they are intending to attend and in return gets breweries closest to the match's stadium. 
We will use the sportsmonk football api for the soccer games match and venue coordinates
and the Yelp business search api to find the closest breweries near the stadium.

Sportsmonk football api: 
https://docs.sportmonks.com/football2/getting-started/welcome 

Yelp business search api:
https://docs.developer.yelp.com/reference/v3_business_search

The external API calls are all moved to backend view.py file.

Technology stacks we use:

front end: ReactJS

backend: Django Python

database: MongoDB

connection method of connecting Django to MongoDB: PyMongo and Djongo

How the app works:

At first, in the home page the user needs to log in through google Oauth or manually log in, if he doesn't have an account, he will click sign up button, 
and after he completes sign up, his user information will be stored in our MongoDB database. After he is verified from our Mongodb database and successfully logs in, the profile page will be enabled for him to check his user info and his favourite football team. He can also log out after he's logged in.

In the home page, there's the search functionality, in which user enters the football team that he's going to watch and the match date, our app will 
first display the match's details, and then provide a find-breweries hyperlink for user to click to redirect to another page, in which 
the page displays the top 5 closest breweries, including all the detailed information of each brewery, such as brewery name, address, city name, business phone number, Yelp url and rating on Yelp. 
