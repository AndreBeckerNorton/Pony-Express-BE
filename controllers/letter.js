const Letter = require('../models/letter');

exports.postCreateLetter = (req, res) => {
    const content = req.body.content
    Letter
        .createLetter(content)
        .then(result => {
            if(result) {
                return res.json({"content": result});
            } else {
                return res.status(400).json({message: "Content creation failed"});
            }
        })
        .catch(err => {
            return res.status(400).json({message: "Content creation failed"});
        })
}