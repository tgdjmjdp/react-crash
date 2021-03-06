const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/user');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

router.get('/', (req, res) => {
    res.send('haha');
});

router.post('/create', [
    check('name', 'name is required').not().isEmpty(),
    check('email', "please include a valid email").isEmail(),
    check('password', 'password must contain atleast 6 or more charaters').isLength({ min: 6 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        name,
        email,
        password
    } = req.body

    try {

        let user = await User.findOne({ "name": name });

        if (user) {
            console.log('====================================');
            console.log("user exists");
            console.log('====================================');

            return res.status(400).json({
                errors: [{
                    msg: 'User exists'
                }]
            });

        }

        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        user = new User({
            name,
            email,
            password,
            avatar
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        console.log(user);

        const createUser = await user.save();

        if (createUser) {
            console.log('====================================');
            console.log("user " + user.name + " is created");
            console.log('====================================');
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtToken'), { expiresIn: 360000 }, (error, token) => {
            if (error) throw error;
            res.json({ token });
            console.log('====================================');
            console.log("token generated");
            console.log('====================================');
            console.log(token);
            console.log('====================================');
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;
