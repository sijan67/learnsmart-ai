const mongoose = require('mongoose');
const clarifyMoreSchema = new mongoose.Schema({
    lecture_id: {type: String, required: true},
    content: {type: String, required: true},
    references: [referenceSchema],
})

const clarifyMore = mongoose.Model('clarifyMore', clarifyMoreSchema);

Module.exports = clarifyMore