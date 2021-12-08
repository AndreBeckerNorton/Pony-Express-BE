const Conversation = require('../models/conversation');

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