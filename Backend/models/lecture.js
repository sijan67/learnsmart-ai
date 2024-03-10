const mongoose = require('mongoose');
const keySummary = require('./keySummary');

const lectureSchema = new mongoose.Schema({
    identifier: String,
    title: String,
    speechToTexts: [speechToTextSchema],
    keySummaries: [keySummarySchema],
    clarifyMores: [clarifyMoreSchema],
});
const lecture = mongoose.model("lecture", lectureSchema);

module.exports = lecture
