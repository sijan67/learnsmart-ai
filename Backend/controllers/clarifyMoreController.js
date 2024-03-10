const ClarifyMore = require('../models/clarifyMore');
const Lecture = require('../models/Lecture');

//implement the create clarfyMore function 
exports.addclarifyMore = async (req, res) => {
    if (!req.body.lecture_id) {
        res.status(400).json({message: "lecture ID is required!"});
    }
   
    try {
        const newClarifyMore = new ClarifyMore(req.body);
        newClarifyMore.lecture_id = req.body.lecture_id;
        await newClarifyMore.save();
        res.status(201).json(newClarifyMore);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


//implement the get ClarifyMore function
exports.getClarifyMore = async(req, res) => {
    if (!req.query.lecture_id) {
        return res.status(400).json({ message: "Lecture ID must be provided." });

    }
    try {
        const lecture = await Lecture.findOne({identifier: req.query.lecture_id});

        if (!lecture) {
            return res.status(404).json({ message: "Lecture not found." });
        }
        
        const clarifyMores = lecture.clarifyMores;

        res.json(clarifyMores);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
} 

