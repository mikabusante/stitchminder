const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi!!!');
});

app.listen(process.env.PORT || 5000);
