const express = require("express");
const router = express.Router();
const data = require("../model/dataSchema");

require("../db/connection");
require("dotenv").config();

// ************ POSTS ******************************

router.post("/blogs", async (req, res) => {
  const { blog } = req.body;
  if (!blog) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const blogData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          blogs: blog,
        },
      }
    );
    const blogAdd = await blogData.save();
    if (blogAdd) {
      console.log(blogAdd);
      res
        .status(200)
        .json({ message: "blog added succesfully into the Database" });
    } else {
      res.status(404).json({ error: "blog NOT added" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/photos", async (req, res, next) => {
  const { photo } = req.body;
  if (!photo) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const photoData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          photos: photo,
        },
      }
    );
    const photoAdd = await photoData.save();
    if (photoAdd) {
      console.log(photoAdd);
      res.status(200).json({ message: photoAdd });
    } else {
      res.status(404).json({ error: "photo NOT added" });
    }
  } catch (err) {
    console.log(err);
  }
  console.log(req.body);
});

router.post("/arts", async (req, res) => {
  const { photo } = req.body;
  if (!photo) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const artData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          arts: photo,
        },
      }
    );
    const artAdd = await artData.save();
    if (artAdd) {
      console.log(artAdd);
      res
        .status(200)
        .json({ message: "art added succesfully into the Database" });
    } else {
      res.status(404).json({ error: "art NOT added" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/travels", async (req, res) => {
  const { photo } = req.body;

  if (!photo) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const travelData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          travels: photo,
        },
      }
    );
    const travelAdd = await travelData.save();
    if (travelAdd) {
      console.log(travelAdd);
      res
        .status(200)
        .json({ message: "travel added succesfully into the Database" });
    } else {
      res.status(404).json({ error: "travel NOT added" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/developers", async (req, res) => {
  const { photo } = req.body;
  if (!photo) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const developerData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          developers: photo,
        },
      }
    );
    const developerAdd = await developerData.save();
    if (developerAdd) {
      console.log(developerAdd);
      res
        .status(200)
        .json({ message: "developer added succesfully into the Database" });
    } else {
      res.status(404).json({ error: "developer NOT added" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/sculptures", async (req, res) => {
  const { photo } = req.body;
  if (!photo) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const sculptureData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          sculptures: photo,
        },
      }
    );
    const sculptureAdd = await sculptureData.save();
    if (sculptureAdd) {
      console.log(sculptureAdd);
      res
        .status(200)
        .json({ message: "sculpture added succesfully into the Database" });
    } else {
      res.status(404).json({ error: "sculpture NOT added" });
    }
  } catch (err) {
    console.log(err);
  }
});

// ************************* GETS ************************************

router.get("/get", async (req, res) => {
  let content = [];
  try {
    const elements = await data.find({});
    if (elements) {
      elements.map((element) => {
        content = [...content, element];
      });
      res.send(content);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;