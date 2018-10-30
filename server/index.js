const express = require('express');
const path = require('path');
const db = require('../db/index.js');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../public/')));

app.use('/:id', express.static('public'));

app.get('/youMayAlsoLike/:id', (req, res) => {
  const currentItem = parseInt(req.params.id, 10);
  db.RelatedItems.find()
    .then((data) => {
      let fourRelatedItems = [];
      if (currentItem < 96) {
        fourRelatedItems = data.slice(currentItem, currentItem + 4);
      } else {
        fourRelatedItems = data.slice(currentItem - 6, currentItem - 2);
      }
      res.send(fourRelatedItems);
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
