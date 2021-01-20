const { Schema, model } = require('mongoose');

const Profile = require('./Profile')

let UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    },







},
    {
        timestamps: true
    }
)

let User = model('User', UserSchema)

module.exports = User


