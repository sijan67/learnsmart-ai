const Lecture = require('../models/Lecture');


//implement the create lecture action
exports.addLecture = async(req, res) => {
    try {
        const newLecture = new Lecture(req.body);
        const uniqueID = `${new Date().getTime()}-${req.body.title.replace(/\s+/g, '-').toLowerCase()}`;
        newLecture.identifier = uniqueID;
        await newLecture.save();
        res.status(201).json(newLecture);
    
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//implement the retrieve lecture action
exports.getLecture = async(req, res) => {
    try {
        const lectures = await Lecture.find({});
        res.json(lectures);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
} 

//implement the update lecture action
exports.updateLecture = async(req, res) => {
    try {
        const 
    }
}

