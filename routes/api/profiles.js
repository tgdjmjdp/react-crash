const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('User profile'));

module.exports = router;