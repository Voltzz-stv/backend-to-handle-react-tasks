const express = require("express");
const { getItems, postItem, deleteItem } = require("../controller/admin");

const router = express.Router();

router.get("/items", getItems);

router.post("/items", postItem);

router.delete('/items/:itemId', deleteItem)

module.exports = router;
