const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public/')));

app.listen(3003, () => console.log('listening on port 3003'));
