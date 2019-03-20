const express = require('express');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes');

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//http://localhost:5000/auth/google/callback
