const mongoose = require('mongoose');

const keySummarySchema = new mongoose.Schema({
    lecture_id: {type: String, required: true},
    content: {type: String, required: true},
})

const keySummary = mongoose.Model('keySummary', keySummarySchema);

module.exports = keySummary;