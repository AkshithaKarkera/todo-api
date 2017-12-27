//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

/*db.collection('Todos').find({
  _id: new ObjectID('5a434aafb134a11b301f2b76')
}).toArray().then((docs) => {
  console.log('Todos');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch todos', err);
});

db.collection('Todos').find().count().then((count) => {
console.log(`Todos count: ${count}`);
}, (err) => {
  console.log('Unable to fetch todos', err);
});*/


db.collection('Users').find({Name: 'Akshitha'}).toArray().then((docs) => {
console.log(JSON.stringify(docs, undefined, 2));
});

/*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  console.log(result);
});
db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  console.log(result);
});

db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  console.log(result);
}); */

//db.collection('Users').deleteMany({Name: 'Akshitha'});

db.collection('Users').findOneAndDelete({_id: new ObjectID("5a4350900bc2d01bb8f341bb")
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});


  //db.close();
});
