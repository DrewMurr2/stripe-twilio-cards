var find = require('./find').find
function returnUserFromEmail(emai, callback) {
    find({ database: "TXTBeaver", collection: "Users", arg1: { email: emai } }, res => { if (res && res.results && res.results.length > 0) { callback(res.results[0]) } else { callback(false) } })
}

module.exports.returnUserFromEmail = returnUserFromEmail;