const mongoose = require('mongoose');
const speechToTextSchema = new mongoose.Schema({
    content: {type: String, required: true},
})

const speechToText = mongoose.Model('clarifyMore',speechToTextSchema);

Module.exports = clarifyMore