const { Schema, model } = require('mongoose')


const User = require('./User')
const Comments = require('./Comment')

let PostSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    tags: {
        type: [String],
        required: true
    },
    thumbnail: String,
    readtime: String,
    likes: [Schema.Types.ObjectId],
    Dislikes: [Schema.Types.ObjectId],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comments'
        }
    ]
},
    {
        timestamps: true
    })

let Post = model('Post', PostSchema)