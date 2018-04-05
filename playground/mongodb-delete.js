// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

   //deleteMany
//    db.collection('Users').deleteMany({name: 'Shajaroh Chowdhry'}).then((result) => {
//        console.log(result);
//    });
   //deleteOne
   
    db.collection('Users').deleteOne({_id: new ObjectID("5ac3f397070f281a74b1d2f0")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
   //findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//         console.log(result);
//    });

    // db.close();
});