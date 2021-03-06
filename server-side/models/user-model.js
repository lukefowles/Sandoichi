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
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 6
    },
    address: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1,
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
    
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;