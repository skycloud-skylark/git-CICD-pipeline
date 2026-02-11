const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Production CI/CD demo Running Successfully 🚀');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
