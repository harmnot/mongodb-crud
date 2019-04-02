const Book = require("../model/book.js");

class BookService {
  static create(req, res, next) {
    Book.create(req.body, (err, result) => {
      if (err) {
        res.status(500).json({ databaseErr: "something err with database" });
      } else {
        res.status(200).json({ data: result });
      }
    });
  }

  static findAll(req, res, next) {
    Book.findAll((err, items) => {
      if (err) {
        res.status(500).json({ databaseErr: "something err with database" });
      } else {
        res.status(200).json({ data: items });
      }
    });
  }

  static updateOne(req, res, next) {
    Book.updateOne(req.params.id, req.body, (err, item) => {
      if (err) {
        res.status(500).json({ databaseErr: "something error with database" });
      } else {
        res.status(200).json({ msg: "berhasil di update" });
      }
    });
  }

  static deleteOne(req, res, next) {
    Book.deleteOne(req.body, (err, item) => {
      if (err) {
        res.status(500).json({ databaseErr: "something error with database" });
      } else {
        res.status(200).json({ msg: `berhasil di hapus` });
      }
    });
  }
}

module.exports = BookService;
