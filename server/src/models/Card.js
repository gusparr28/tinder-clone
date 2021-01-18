const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    name: String,
    image: String
});

module.exports = model('Card', cardSchema);