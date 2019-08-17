const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('API Running');
});

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/api/auth'));

app.use('/api/post', require('./routes/api/posts'));

app.use('/api/profile', require('./routes/api/profiles'));

app.use('/api/user', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
