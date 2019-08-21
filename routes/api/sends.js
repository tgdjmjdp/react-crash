const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/user');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

router.get('/', (req, res) => {
    console.log('====================================');
    console.log("HERE I AM");
    console.log('====================================');
    res.send('haha');
});

module.exports = router;
