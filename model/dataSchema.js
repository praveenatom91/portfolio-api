const mongoose = require("mongoose");
const dataScheme = new mongoose.Schema({
  blogs: {
    type: [String],
  },
  photos: {
    type: [String],
  },
  arts: {
    type: [String],
  },

  travels: {
    type: [String],
  },
  developers: {
    type: [String],
  },
  sculptures: {
    type: [String],
  },
});

const data = mongoose.model("DATA", dataScheme);
module.exports = data;
