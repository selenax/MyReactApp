const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const graphqlHttp = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport.js');

mongoose.connect(keys.mongoURI);

//Middlewares
const app = express();

//parse incoming request bodies, assign to req.body
app.use(bodyParser.json());

app.use(
  cookieSession({
    //determine when cookie expires, need to be milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //to encrypt the cookie
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//authRoutes returns a function
require('./routes/authRoutes.js')(app);

// app.use(
//   '/graphql',
//   graphqlHttp({
//     schema: graphqlSchema,
//     rootValue: graphqlResolver
//   })
// );

const PORT = process.env.PORT || 5000;
app.listen(PORT);
