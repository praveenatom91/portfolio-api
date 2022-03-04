const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  category: {
    type: String,
  },
});

const blogSubSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
  },
  slug: {
    type: String,
  },
});

const dataScheme = new mongoose.Schema({
  blogs: [blogSubSchema],
  photos: [subSchema],
  arts: [subSchema],
  travels: [subSchema],
  developers: [subSchema],
  sculptures: [subSchema],
});

const data = mongoose.model("DATA", dataScheme);
module.exports = data;
