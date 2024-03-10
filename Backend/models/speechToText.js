const mongoose = require('mongoose');
const speechToTextSchema = new mongoose.Schema({
    lecture_id: {type: String, required: true},
    content: {type: String, required: true},
})

const speechToText = mongoose.Model('clarifyMore',speechToTextSchema);

Module.exports = clarifyMore