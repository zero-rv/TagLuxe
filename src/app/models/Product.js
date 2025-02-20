const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema({
    id: { type: String },
    name: { type: String },
    new_price: { type: Number },
    old_price: { type: Number },
    hot_item: { type: Boolean },
    new_item: { type: Boolean },
    best_item: { type: Boolean },
    img: { type: String },
    slug: { type: String, slug: "name" },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', Product);