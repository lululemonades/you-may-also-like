const mongoose = require('mongoose');
const exampleData = require('../exampleData.js');
mongoose.connect('mongodb://localhost/youMayAlsoLike');

const db = mongoose.connection;

db.once('open', (err) => {
  if (err) {
    console.log('There was an error connecting to database');
  } else {
    console.log('You are connected');
  }
});

const relatedSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  main: String,
  hover: String,
  price: String,
  color: Array
});

const RelatedItems = mongoose.model('Related', relatedSchema);

RelatedItems.insertMany(exampleData, (err, docs) => {
  if (err) {
    console.log('there was an error adding items to the database');
  } else {
    console.log('Many items were successfully added to the database', docs);
  }
});

module.exports = {
  RelatedItems
};
