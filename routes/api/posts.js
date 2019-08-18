const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../../models/user');
const Profile = require('../../models/profile');
const Post = require('../../models/post');

router.post('/', [auth, [
    check('text', 'text is required').not().isEmpty()
]], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const user = await User.findById(req.user.id).select('-password');

        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        });

        const post = await newPost.save();

        if (post) {
            console.log('====================================');
            console.log("post created");
            console.log('====================================');            
        }

        res.json(post);

    } catch (error) {

        console.log('====================================');
        console.error(error.message);
        console.log('====================================');
        res.status(500).send('Server Error');

    }
});

module.exports = router;