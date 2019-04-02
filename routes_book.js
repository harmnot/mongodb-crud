const express = require("express");
const router = express.Router();
const BookService = require("../controller/book.js");

router.get("/", BookService.findAll);
router.post("/", BookService.create);
router.put("/", BookService.updateOne);
router.delete("/", BookService.deleteOne);

module.exports = router;
