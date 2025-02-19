const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/tagluxe_shopping_dev');
        console.log('Read Database Successfully');
    } catch (error) {
        console.log('Fail to read Database');
    }
}

module.exports = { connect };