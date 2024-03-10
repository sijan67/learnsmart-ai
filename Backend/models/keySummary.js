const mongoose = require('mongoose');

const keySummarySchema = new mongoose.Schema({
    content: {type: String, required: true},
})

const keySummary = mongoose.Model('keySummary', keySummarySchema);

module.exports = keySummary;