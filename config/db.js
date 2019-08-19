const Mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await Mongoose.connect('mongodb://localhost:27017/mern', {
            useCreateIndex: true,
            useNewUrlParser: true, 
            useFindAndModify: false
        });
        console.log('DB Connected');
        
    } catch (error) {
        console.log('NOT Connected')
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