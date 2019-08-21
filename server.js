const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('API Running');
});

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/api/auth'));

app.use('/api/post', require('./routes/api/posts'));

app.use('/api/profile', require('./routes/api/profiles'));

app.use('/api/user', require('./routes/api/users'));

app.use('/api/send', require('./routes/api/sends'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
