//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5a436bb7d0060073b644ea6b')
}, {
  $set: {
    completed: true
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  //db.close();
});
