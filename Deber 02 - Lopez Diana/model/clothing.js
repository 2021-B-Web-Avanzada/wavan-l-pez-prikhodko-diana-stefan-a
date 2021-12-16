const mongoose = require('mongoose');

const ClothingSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    topSelling: {
        type: Boolean,
        required: true
    },
    storeCode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Clothing', ClothingSchema);