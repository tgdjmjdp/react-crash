const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser:true
        });

        console.log('DB Connected');

    } catch (error) {
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