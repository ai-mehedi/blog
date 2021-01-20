const { Schema, model } = require('mongoose')
const User = require('./User')
const Post = require('./Post')
let ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    profilePic: String,
    link: {
        website: String,
        facebook: String,
        twitter: String,
        github: String
    },
    post: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    bookmark: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
},
    {
        timestamps: true
    })

let Profile = model('Profile', ProfileSchema)