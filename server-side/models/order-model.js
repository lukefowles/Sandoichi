import mongoose from "mongoose";
import itemSchema from "./item-model.js"

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    items:{
        type: [itemSchema],
        required: true,
        unique: false,
        trim: false,
        minlength: 1,
    },
    totalCost: {
        type: Number,
        required: true,
        unique: false,
        trim: false,
        minlength: 1,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    deliveryAddress: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        minlength: 1,
    }
},
{
    timestamps: true
});


const Order = mongoose.model('Order', orderSchema);
export default Order;