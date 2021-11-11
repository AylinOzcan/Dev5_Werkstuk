const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('redirect to index.html');
})

app.listen(PORT, () => {
  console.log(`app listening at localhost :${PORT}`);
})