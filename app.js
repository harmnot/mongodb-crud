const express = require("express");
const app = express();
const books = require("./routes/book.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", books);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`you are connected on localhost:3000`);
});
