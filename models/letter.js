const getDb = require('../util/database').getDb;

exports.createLetter = (content) => {
    let db = getDb();
    var letterInfo = {"content": content};
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