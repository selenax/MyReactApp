const express = require('express');
const app = express();

app.get('/', (rep, res) => {
  res.send({ Hello: 'World' });
});

app.listen(5000);
