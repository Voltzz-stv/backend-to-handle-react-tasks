const Item = require("../models/schema");

exports.getItems = (req, res) => {
  Item.find({}).then((result) => {
    res.status(200).json(result);
  });
};

exports.postItem = (req, res) => {
  const title = req.body.formData.title;
  const description = req.body.formData.description;
  const imageUrl = req.body.formData.imageUrl;
  const item = new Item({
    title: title,
    description: description,
    imageUrl: imageUrl,
  });
  item
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Item created successfully",
        post: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteItem = (req, res) => {
  console.log(req.params.itemId);
  const itemId = req.params.itemId;
  Item.deleteOne({ _id: Object(itemId) })
    .then(() => {
      console.log("item deleted");
    })
    .catch((err) => console.log(err));
};
