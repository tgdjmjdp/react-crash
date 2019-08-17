const mongoose = require('mongoose');
const config = require('config');
const db = 'mongodb://127.0.0.1:27017';
const MongoClient = require('mongodb').MongoClient, format = require('util').format;

const connectDB = async () => {
    try {
        await MongoClient.connect(db, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('DB connected');

    } catch (err) {
        console.error(err.message);
        process.exit(1);

    }
}

module.exports = connectDB;














/* const MongoClient = require('mongodb').MongoClient, format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017', (err, db) => {
    if(err){
        throw err;
    }else{
        console.log("connected");

    }
    db.close();
})

 */