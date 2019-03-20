const express = require('express');
require('./services/passport.js');
const graphqlHttp = require('express-graphql');

const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');

const app = express();

//authRoutes returns a function
require('./routes/authRoutes.js')(app);

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
