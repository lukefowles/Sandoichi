import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    type: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    price:{
        type: Number,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    }
},
{
    timestamps: true
})

// const Item = mongoose.model('Item', itemSchema);
export default itemSchema;