const mongoose = require('mongoose');

const ClothingStoreSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    wholesaler: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model('ClothingStore',ClothingStoreSchema);