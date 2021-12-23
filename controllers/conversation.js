const Conversation = require('../models/conversation');
const Letter = require('../models/letter');

exports.postCreateConversation = (req, res) => {
    Conversation
        .createConversation()
        .then(result => {
            if(result) {
                return res.json({"link": result});
            } else {
                return res.status(400).json({message: "Conversation creation failed"});
            }
        })
        .catch(err => {
            return res.status(400).json({message: "Conversation creation failed"});
        })
}

exports.getConversation = (req, res) => {
    const id = req.params.id
    Conversation
        .findById(id) 
        .then(result => {
            console.log(result)
            if(result) {
                Letter
                    .findByConvoId(id)
                    .then(letters => {
                        console.log(letters)
                        return res.json(letters);
                    })
                } else {
                    return res.status(400).json({message: "Conversation not found"});
                }
        })
        .catch(err => {
            return res.status(400).json({message: "Conversation not found"});
        })
}
