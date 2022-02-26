const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  category: {
    type: String,
  },
});

const dataScheme = new mongoose.Schema({
  blogs: {
    type: [String],
  },
  photos: [subSchema],
  arts: [subSchema],
  travels: [subSchema],
  developers: [subSchema],
  sculptures: [subSchema],
});

const data = mongoose.model("DATA", dataScheme);
module.exports = data;
