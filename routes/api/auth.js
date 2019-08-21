const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/user');
const config = require('config');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.get('/', auth, async (req, res) => {

try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
} catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
}

    res.send('User auth');
});

router.post('/create', [    
    check('name', 'name is required').not().isEmpty(),
    check('password', 'password is required').exists()
], async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {

        let user = await User.findOne({ "name": name });

        if (!user) {
            console.log(user);

            return res.status(400).json({
                errors: [{
                    msg: 'User not exists'
                }]
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                errors: [{
                    msg: 'User not exists'
                }]
            });
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtToken'), { expiresIn: 360000 }, (error, token) => {
            if (error) throw error;
            res.json({ token });
        });
        

        /* res.send('User registered'); */

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }

    /*     console.log(req.body);
        res.send('create user route'); */
});

module.exports = router;