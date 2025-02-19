const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    id: { type: Number },
    name: { type: String, maxLength: 600 },
    new_price: { type: Number },
    old_price: { type: Number },
    hot_item: { type: Boolean },
    new_item: { type: Boolean },
    best_item: { type: Boolean },
    img: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', Product);