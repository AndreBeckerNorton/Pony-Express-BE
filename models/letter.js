const mongodb = require('mongodb')
const getDb = require('../util/database').getDb;

exports.createLetter = (content, convoId) => {
    let db = getDb();
    var letterInfo = {
        "convoId": new mongodb.ObjectId(convoId),
        "content": content,
        "createdAt": Date.now()
    };
    return db.collection('letters')
        .insertOne(letterInfo)
        .then(result => {
            console.log(result)
            if(result.acknowledged) {
                return content;
            }
            return false;
        })
        .catch(err => {
            console.log(err);
            return err
        })
}

exports.findById = (id) => {
    let db = getDb();
    var mongoId = new mongodb.ObjectId(id)
    return db.collection('letters')
        .findOne({
            _id: mongoId
        })
        .catch(err => {
            console.log(err);
            return err
        })
}

