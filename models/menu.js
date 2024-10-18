const mongoose = require('mongoose');



const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number ,
        required: true,
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true,
    },
    is_drink:{
        type: Boolean,
        default: false,
    },
    ingredient: {
        type: [String],
        default: [],  
    },
    num_seles: {
        type: Number,
        default: 0,
    }
});

const menu = mongoose.model('menu', menuItemSchema);
module.exports = menu;
