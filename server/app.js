const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { Types } = require('./routes/typeRouter.js');
const { User } = require('./routes/userRoutes.js');
const { Deck } = require('./routes/deckRoutes.js');
const { Pokedex } = require('./routes/pokedexRoutes.js');
const { Chat } = require('./routes/chat');
const { obtainAllUsers } = require('./db/dbHelperFuncs.js');

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');

const axios = require('axios');
require('dotenv').config();
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

const app = express();
app.use(session({
  secret: 'Our little secret.',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.redirect('/');
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client/dist/login')));
app.use('/home', isLoggedIn, express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(CLIENT_PATH));


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/',
  })
);

app.get('/auth/failure', (req, res) => {
  res.redirect('/login');
});

app.get('/cloudinary', (req, res) => {
  axios.get(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image`, {
    auth: {
      username: CLOUDINARY_API_KEY,
      password: CLOUDINARY_API_SECRET
    }
  })
    .then(results => {
      console.log('RESULTS', results.data.resources); // results.data.resources[0].url
      console.log('NEXT CURSOR', results.data.next_cursor);
      res.status(200).send(results.data.resources);
    })
    .catch(err => {
      console.log('Error from cloudinary?', err);
      res.sendStatus(500);
    });
});

// maybe move to routes... ?
app.post('/team', (req, res) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.data.pokeLookup}`)
    .then(pokemon => {
      const stats = pokemon.data.stats.reduce((acc, cur) => {
        return acc + cur.base_stat;
      }, 0);
      const pokeTypes = pokemon.data.types.map(el => el.type.name);
      res.body = {
        sprite: pokemon.data.sprites.front_default,
        name: pokemon.data.name,
        statTotal: stats,
        types: pokeTypes,
        canBattle: true
      };
      res.status(200).send(res.body);
    })
    .catch(err => {
      console.error('failed hitting pokeAPI for pokemon', err);
    });
});

app.use('/api/user', User);
app.use('/api/pokedex', Pokedex);
app.use('/api/deck', Deck);
app.use('/api/chat', Chat);
app.use('/api/types', Types);


app.use('*', (req, res) => {
  res.sendFile(path.join(CLIENT_PATH, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = {
  app,
};
