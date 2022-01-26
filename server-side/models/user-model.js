import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1,
    },
    address: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1,
    },
    
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;