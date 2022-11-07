const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const session = require('express-session');


const mongoUri = 'mongodb://localhost/poke';


mongoose.connect(mongoUri)
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log('you did not connect to mongodb'));



const userSchema = new Schema({
  _id: Number,
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
  deckId: String,
  favPokemon: String,
});
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


const chatSchema = new Schema({
  receiver: {
    type: String,
    require: true,
  },
  sender: {
    type: String,
    require: true
  },
  message: String,
  date: String
});

const deckSchema = new Schema({
  cardId: String,
  userId: String
});
//hello
const User = mongoose.model('User', userSchema);
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
},
function (accessToken, refreshToken, profile, cb) {
  User.findOrCreate({
    _id: profile.id,
    username: profile.displayName,
    password: profile._json.email
  }, function (err, user) {
    console.log(profile);

    return cb(err, user);
  });
}
));
const deckModel = mongoose.model('Deck', deckSchema);
const chatModel = mongoose.model('Chat', chatSchema);
passport.use(User.createStrategy());


passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});





module.exports = {
  deckModel,
  User,
  chatModel,
};