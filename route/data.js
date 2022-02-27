const express = require("express");
const router = express.Router();
const data = require("../model/dataSchema");

require("../db/connection");
require("dotenv").config();

// ************ POSTS ******************************

router.post("/blogs", async (req, res) => {
  const { title, image, content } = req.body;
  if (!image || !title || !content) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const blogData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          blogs: {
            title: title,
            image: image,
            content: content,
          },
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
  const { image, category } = req.body;
  if (!image || !category) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const photoData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          photos: {
            image: image,
            category: category,
          },
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
  const { image, category } = req.body;
  if (!image || !category) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const artData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          arts: {
            image: image,
            category: category,
          },
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
  const { image, category } = req.body;

  if (!image || !category) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const travelData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          travels: {
            image: image,
            category: category,
          },
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
  const { image, category } = req.body;
  if (!image || !category) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const developerData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          developers: {
            image: image,
            category: category,
          },
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
  const { image, category } = req.body;
  if (!image || !category) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const sculptureData = await data.findOneAndUpdate(
      {},
      {
        $push: {
          sculptures: {
            image: image,
            category: category,
          },
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
