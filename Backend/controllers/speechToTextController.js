const Lecture = require('../models/Lecture');
const speechToText = require('../models/speechToText');

//create speechtotext to add to the lecture's list
exports.addSpeechToText = async (req, res) => {
    if (!req.body.lecture_id) {
        res.status(401).json({message: "lecture_id is missing"});
    }

    try {
        const newSpeechToText = new speechToText(req.body);
        newSpeechToText.lecture_id = req.body.lecture_id;
        await newSpeechToText.save();
        res.status(201).json(newSpeechToText);  

    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

//implement the retrieve speechtotext
exports.getSpeechToText = async(req, res) => {
    if (!req.query.lecture_id) {
        return res.status(400).json({ message: "Lecture ID must be provided." });

    }
    try {
        const lecture = await Lecture.findOne({identifier: req.query.lecture_id});

        if (!lecture) {
            return res.status(404).json({ message: "Lecture not found." });
        }
        
        const speecthToTexts = lecture.speechToTexts;

        res.json(speecthToTexts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
} 


