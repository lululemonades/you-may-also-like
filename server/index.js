const express = require('express');
const path = require('path');
const db = require('../db/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/youMayAlsoLike/:id', (req, res) => {

  const currentItem = parseInt(req.params.id);
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

app.listen(3003, () => console.log('listening on port 3003'));