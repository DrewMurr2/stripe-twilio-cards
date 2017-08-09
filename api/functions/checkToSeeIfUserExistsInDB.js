var find = require('./find').find
function check(emai, callback) {
    find({ database: "TXTBeaver", collection: "Users", arg1: { email: emai } }, res => { if (res && res.results && res.results.length > 0) { callback(true) } else { callback(false) } })
}

module.exports.check = check;