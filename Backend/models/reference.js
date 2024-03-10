const mongoose = require('mongoose');

const referenceSchema = new mongoose.Schema({
    clarifyMore_id: {type: String, required: true},
    title: {type: String, required: true},
    url: {type: String}
})

const reference = mongoose.Model('reference', referenceSchema);

module.exports = reference