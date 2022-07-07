const express = require('express');

const bodyParser = require('body-parser');
const { application } = require('express');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());







app.listen(PORT, () => {
  console.log(`To ouvindo na porta ${PORT}`);
});