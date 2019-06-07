import { model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    firstName: String,
    lastName: String,
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        validate: (value: string) => {
            return value.length > 6
        }
    },
    password: {
        type: String,
        required: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

export const Users = model('User', UserSchema, 'Users');

