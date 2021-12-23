const Conversation  = require('../models/conversation');
const Letter = require('../models/letter');

exports.postCreateLetter = (req, res) => {
    const content = req.body.content
    const convoId = req.body.convoId
    Conversation
        .findById(convoId)
        .then(conversation => {
            if(!conversation) {
                throw new Error()
            } else {
            Letter
                .createLetter(content, convoId)
                .then(result => {
                    if(result) {
                        return res.json({"content": result});
                    } else {
                        throw new Error()
                    }
                })
                .catch(err => {
                    return res.status(400).json({message: "Content creation failed"});
                })
            }
        })
        .catch(err => {
            return res.status(400).json({message: "Content creation failed"});
        })
}

exports.getLetter = (req, res) => {
    const id = req.params.id
    Letter
    .findById(id) 
    .then(result => {
        console.log(result)
        if(result) {
                return res.json(result);
            } else {
                return res.status(400).json({message: "Letter not found"});
            }
        })
        .catch(err => {
            return res.status(400).json({message: "Letter not found"});
        })
}

