const mongoose = require("mongoose");

require("dotenv").config();
const uri = process.env.DATABASE_URI;

const connection = async () => {
  try {
    const response = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (response) {
      console.log("Connection established with the Database");
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connection;
