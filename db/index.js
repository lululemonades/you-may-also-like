const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/relateditems');

const db = mongoose.connection;

const relatedSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  main: String,
  hover: String,
  color: Array
});
