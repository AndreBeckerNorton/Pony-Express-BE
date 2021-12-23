const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');
const { customAlphabet } = require('nanoid');
const alphabet = '0123456789abcdef';
const nanoid = customAlphabet(alphabet, 24);

exports.createConversation = () => {
    let db = getDb();
    var link = nanoid();
    var conversationInfo = {"link": link};
    return db.collection('conversations')
        .insertOne(conversationInfo)
        .then(result => {
            if(result.acknowledged) {
                return link;
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
    return db.collection('conversations')
        .findOne({
            _id: mongoId
        })
        .catch(err => {
            console.log(err);
            return err
        })
}



// class Conversation {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//     }

//     save() {
//         let db = getDb();
//         return db.collection('users')
//             .insertOne(this)
//             .then(result => {
//                 return result.ops[0];
//             })
//             .catch(err => {
//                 console.log(err);
//                 return err
//             })
//     }

//     static findById(userId) {
//         let db = getDb();
//         return db.collection('users')
//             .findOne({ _id: new mongodb.ObjectId(userId) })
//             .then(user => {
//                 return user;
//             })
//             .catch(err => {
//                 console.log(err);
//                 return err;
//             })
//     }

//     static findByEmail(email) {
//         let db = getDb();
//         return db.collection('users')
//             .findOne({ email: email })
//             .then(user => {
//                 return user;
//             })
//             .catch(err => {
//                 console.log(err);
//                 return err;
//             })
//     }

// }

// module.exports = User;