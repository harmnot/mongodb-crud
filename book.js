const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "first-mongoDB";
const client = new MongoClient(url, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db(dbName);
//   // perform actions on the collection object
//
//   client.close();
// });
// // console.log(MongoClient);

class Book {
  static create(data, callback) {
    client.connect(err => {
      if (err) throw err;
      const db = client.db(dbName);
      const collection = db.collection("books");
      collection.insertOne({ ...data }, (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    });
  }

  static findAll(callback) {
    client.connect(err => {
      if (err) throw err;
      const db = client.db(dbName);
      const collection = db.collection("books");
      collection.find({}).toArray((err, items) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, items);
        }
      });
    });
  }

  static updateOne(find, set, callback) {
    client.connect(err => {
      if (err) throw err;
      const db = client.db(dbName);
      const collection = db.collection("books");
      collection.findOneAndUpdate(
        { _id: find },
        { $set: { ...set } },
        (err, item) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, item);
          }
        }
      );
    });
  }

  static deleteOne(find, callback) {
    client.connect(err => {
      if (err) throw err;
      const db = client.db(dbName);
      const collection = db.collection("books");
      collection.deleteOne({ ...find }, (err, item) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, item);
        }
      });
    });
  }
}

module.exports = Book;
