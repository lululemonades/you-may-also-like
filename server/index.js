const express = require('express');
const path = require('path');
const db = require('../db/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/youMayAlsoLike/:id', (req, res) => {

  const currentItem = parseInt(req.params.id)
  console.log('here is the current item', currentItem);

  if (currentItem < 96) {
    db.RelatedItems.find()
      .then((data) => {
        const fourRelatedItems = data.slice(currentItem, currentItem + 4);
        console.log('here is the response data', fourRelatedItems);
        res.send(fourRelatedItems);
      });
  }
});

app.listen(3003, () => console.log('listening on port 3003'));