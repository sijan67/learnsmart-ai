const ClarifyMore = require('../models/clarifyMore');

//implement the create clarfyMore function 
exports.addclarifyMore = async (req, res) => {
    try {
        const newClarifyMore = new ClarifyMore(req.body);
        newClarifyMore.lecture_id = 
        await newClarifyMore.save();
        res.status(201).json(newClarifyMore);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


//implement the get ClarifyMore function
exports.getClarifyMore = async (req, res) => {
    try {
        const clarifyMores = await ClarifyMore.find({});
        res.json(clarifyMores);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



//implement the upate clarifyMore function
exports.updateClarifyMore = async (req.res) => {
    try {


    }
}