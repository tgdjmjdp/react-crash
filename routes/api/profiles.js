const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/profile');
const { check, validationResult } = require('express-validator');

// @route       GET api/profile/ku
// @desc        Get current users profile
// @access      Private

router.get('/ku', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id })
            .populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: "no profile for this user" });
        }

        res.json(profile);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

// @route       GET api/profile
// @desc        Create or update pofile
// @access      Private

router.post('/', [auth, [
    check('status', 'Status is required').not().isEmpty(),
    check('skills', 'Skills are/is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin
    } = req.body;

    // Build profile object

    const profileFields = {};

    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
        profileFields.skills = skills.split(',').map(skills => skills.trim());
    }

    // Build social object

    profileFields.social = {};

    if (youtube) profileFields.social.youtube = youtube;
    if (facebook) profileFields.social.facebook = facebook;
    if (twitter) profileFields.social.twitter = twitter;
    if (instagram) profileFields.social.instagram = instagram;
    if (linkedin) profileFields.social.linkedin = linkedin;

    try {
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile === null) {
            profile = new Profile(profileFields);

            await profile.save();

            res.json(profile);
        } else {

            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );

            console.log(profile);

            return res.json(profile);
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }

});

// @route       GET api/profile
// @desc        Get all profiles
// @access      Public

router.get('/', async (req, res) => {
    try {
        const profile = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profile);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

// @route       GET api/profile/user/:user_id
// @desc        Get profile by user ID
// @access      Public

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({user: req.params.user_id}).populate('user', ['name', 'avatar']);

        if (profile === null) {
            console.log("null");

            return res.status(400).json({ msg: 'Profile not found' });
            
        }

        res.json(profile);

    } catch (error) {
        
        if (error.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

// @route       GET api/profile/user/:user_id
// @desc        Delete profile, user and posts
// @access      Public

router.delete('/', auth, async (req, res) => {
    try {
        console.log(req.user.id);
        

        await Profile.findOneAndRemove({user: req.user.id});

        await User.findOneAndRemove({_id: req.user.id});

        res.json({ msg: 'user removed'});

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;