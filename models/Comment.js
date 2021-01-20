
var { Schema, model } = require('mongoose');
const Post = require('./Post')
const User = require('./User')

let CommentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    replies: [
        {
            body: {
                type: String,
                required: true
            },
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            create: {
                type: Date,
                default: new Date()
            }
        }
    ],







},
    {
        timestamps: true
    }
)

let Comments = model('Comments', CommentSchema)

module.exports = User


