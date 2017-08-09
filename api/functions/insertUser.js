var insertOne = require('./insertOne').insertOne

function insertUser(user, callback) {
    insertOne({ database: "TXTBeaver", collection: "Users", Obj: user }, resp => {
        callback(resp)
    })
}
module.exports.insertUser = insertUser;