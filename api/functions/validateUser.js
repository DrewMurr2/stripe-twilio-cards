var find = require('./find').find
function validateUser(body, callback) {
    find({ database: "TXTBeaver", collection: "Users", arg1: { email: body.email } }, res => { if (res && res.results && res.results.length > 0 && res.results[0].password === body.password) { callback(res.results[0]) } else { callback(false) } })
}

module.exports.validateUser = validateUser;