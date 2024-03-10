const Lecture = require('../models/Lecture');
const keySummary = require('../models/keySummary');


//create speechtotext to add to the lecture's list
const addKeySummary = async (req, res) => {
    if (!req.body.lecture_id) {
        res.status(401).json({message: "lecture_id is missing"});
    }

    try {
        const newSummary = new keySummary(req.body);
        newSummary.lecture_id = req.body.lecture_id;
        await newSummary.save();
        res.status(201).json(newSummary);  

    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

//implement the retrieve speechtotext
exports.getSummary = async(req, res) => {
    if (!req.query.lecture_id) {
        return res.status(400).json({ message: "Lecture ID must be provided." });

    }
    try {
        const lecture = await Lecture.findOne({identifier: req.query.lecture_id});

        if (!lecture) {
            return res.status(404).json({ message: "Lecture not found." });
        }
        
        const summaries = lecture.keySummaries;

        res.json(summaries);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
} 


