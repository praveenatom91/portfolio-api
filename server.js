const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connection");
const fileUpload = require("express-fileupload");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./route/data"));
app.use("/uploads", express.static("uploads"));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
const port = process.env.PORT || 5000;
connectDB();

app.get("/", (req, res) => {
  res.send("Hii welcome to the server");
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
