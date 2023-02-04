const { getAllPokemonTypes } = require('../db/dbHelperFuncs.js');
const { Router } = require('express');
const Types = Router();

Types.get('/', (req, res) => {
  getAllPokemonTypes()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error('Error in typeRouter.js from getAllPokemonTypes: ', err);
      res.sendStatus(500);
    });
});








module.exports = { Types };
