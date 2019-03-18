const express = require('express');
const app = express();

app.get('/', (rep, res) => {
  res.send({ Hello: 'World' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
