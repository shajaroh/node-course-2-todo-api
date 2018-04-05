// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5ac51170fedcbd20aea2c9e5")
    }, {
       $set: {
           name: 'Shajaroh Chowdhry'
       }, 
       $inc: {
        age: 1
       }
    }, {
           returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});