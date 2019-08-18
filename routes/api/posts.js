const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../../models/user');
const Profile = require('../../models/profile');
const Post = require('../../models/post');

// @route       POST api/post
// @desc        Create a post
// @access      Private

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

// @route       GET api/post
// @desc        GET all posts
// @access      Public

router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (error) {
        console.log('====================================');
        console.error(error.message);
        console.log('====================================');
        res.status(500).send('Server Error');
    }
})

// @route       GET api/post/:id
// @desc        GET post by ID
// @access      Public

router.get('/:id', auth, async (req, res) => {
    try {

        const posts = await Post.findById(req.params.id);

        if (!posts) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        res.json(posts);

    } catch (error) {

        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });
        }

        res.status(500).send('Server Error');

    }
})

// @route       DELETE api/post/:id
// @desc        Delete a post
// @access      Private

router.delete('/:id', auth, async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(401).json({
                msg: "Post not found"
            });
        }

        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: "User not authorized"
            });
        }

        await post.remove();

        res.json({ msg: "Post removed " });

    } catch (error) {

        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });
        }

        res.status(500).send('Server Error');

    }
})

// @route       PUT api/post/like/:id
// @desc        Like a post
// @access      Private

router.put('/like/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.json(400).json({ msg: 'Post aleady liked' });
        }
        post.likes.unshift({
            user: req.user.id
        });

        await post.save();

        res.json(post.likes);

        console.log('====================================');
        console.log("Post liked");
        console.log('====================================');

    } catch (error) {
        console.log('====================================');
        console.log(error.message);
        console.log('====================================');
        res.status(500).send('Server Error');
    }
});

// @route       PUT api/post/unlike/:id
// @desc        Unlike a post
// @access      Private

router.put('/unlike/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.json(400).json({ msg: 'Post is not yet liked' });
        }

        const removeIndex = post.likes
            .map(like => like.user.toString())
            .indexOf(req.user.id);

        post.likes.splice(removeIndex, 1);

        await post.save();

        res.json(post.likes);

        console.log('====================================');
        console.log("Post unliked");
        console.log('====================================');

    } catch (error) {
        console.log('====================================');
        console.log(error.message);
        console.log('====================================');
        res.status(500).send('Server Error');
    }
});

// @route       POST api/post/comment/:id
// @desc        Comment a post
// @access      Private

router.post('/comment/:id', [auth, [
    check('text', 'text is required').not().isEmpty()
]], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const user = await User.findById(req.user.id).select('-password');

        const post = await Post.findById(req.params.id);

        const newComment = {
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        };

        post.comments.unshift(newComment);

        await post.save();

        if (post) {
            console.log('====================================');
            console.log("comment created");
            console.log('====================================');
        }

        res.json(post.comments);

    } catch (error) {

        console.log('====================================');
        console.error(error.message);
        console.log('====================================');
        res.status(500).send('Server Error');

    }
});

// @route       DELETE api/post/comment/:id/:comment_id
// @desc        Delete a post's comment
// @access      Private

router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(401).json({
                msg: "Post not found"
            });
        }

        const comment = post.comments.find(
            comment => comment.id === req.params.comment_id
        );

        if (!comment) {
            return res.status(404).json({
                msg: "Comment exisn't"
            });
        }

        if (comment.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: "User not authorized"
            });
        }

        const removeIndex = post.comments
            .map(comment => comment.user.toString())
            .indexOf(req.user.id);

        post.comments.splice(removeIndex, 1);

        await post.save();

        console.log('====================================');
        console.log("Comment deleted");
        console.log('====================================');

        res.json(post.comments);

    } catch (error) {

        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });
        }

        res.status(500).send('Server Error');

    }
})

module.exports = router;