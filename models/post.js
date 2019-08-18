const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'users'
            },
            text: {
                type: String,
                required: true,
            },
            avatar: {
                type: String,
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]

});

module.exports = Post = mongoose.model('posts', PostSchema);