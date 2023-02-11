
# POKEMON TEAMZ

## Description

A web app that a user can use to showcase
their collection of pokemon cards. A user will
be able to buy, sell and trade their cards on
the site. A poke-dex of all the original pokemon
can be used to search through for that great
nostalgic feeling. Along with this, the player
can arrange a random team of 6 along with their
favorite pokemon to battle Gym Trainer rivals
determined in the code. The user can also choose
from 7 preset Trainers to use as their
persistent character. The user can view their
battle history, their spot on the site's leaderboard
and compare strengths and weaknesses of the 18
poketypes.

## Usecase

A great place to evaluate your pokemon cards and to connect with others into the fandom. Create a character and arrange a team to battle non-player-controlled rivals. Track your stats and become the best among your friends!

## TechStack
     - Axios
     - Webpack
     - Express
     - MongoDB
     - Mongo Atlas (db deployment)
     - Mongoose
     - React
     - React-Bootstrap
     - Styled Components
     - MUI
     - Cloudinary
     - ESLint
     - Babel
     - AWS (EC2)
     - Google OAuth2
     - Passport

## Functionality
     - A poke-dex
     - build your personal deck collection and team
     - private messaging for buy sell or trading
     - view other users personal decks
     - friend users
     - battle gym rivals teams of 6 (all teams data are fetched from pokeapi)
     - all battle history will be stored in user specific database

# To get it up and Running
     - `npm install`
     - All Environment variables needed in project are labeled in example.env
     - Make dup of example.env and rename to .env
     - Get your [OAuth Credentials](https://console.cloud.google.com/apis/credentials)
     - set your callbackURL for passport
     - Get Keys from [Pokemon TCG API](https://pokemontcg.io/)
     - Set up Mongo Atlas Cloud Cluster (https://account.mongodb.com/account/login)
      - Set ENV Mongo URI and Mongo API Key
     - Create Cloudinary Cloud (https://cloudinary.com/console)
      - Fetch URL, Cloud Name, API Key and API Secret from Cloudinary Cloud and update ENV values
     - Insert your ENVs in a copy of the example.env
      - Start database BASH: `sudo mongod` OSX: `brew services start mongodb-community@<version>`
     - Run `npm run build`
     - Run `npm run seed`
     - Run `npm start`
     - Open up `localhost:8080`

## Contact
     - https://github.com/The-Dirty-Dino-Mites/pokemon-play-pen/issues
     - open github issue for comments/concerns
