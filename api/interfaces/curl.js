
var curl = {
    url: undefined,
    user: undefined,
    pass: undefined,
    body: undefined,
    bodystring: function () { return require('../functions/serializeObjToUrlEncoding').serializeObjToUrlEncoding(curl.body) },
    request: function () { return require('request') },
    options: function () {
        var op = {}
        op.url = curl.url
        op.json = true
        op.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        if (curl.body) op.body = curl.bodystring()
        if (curl.user) {
            op.auth = { user: curl.user }
            if (curl.pass) {
                op.auth.pass = curl.pass
            } else {
                op.auth.pass = "password"
            }
        }
        return op
    },
    post: function (callback) {
        var options = curl.options()
        options.method = 'POST'
        curl.request().post(options, function (error, response, body) {
            callback({ error: error, response: response, body: body })
        })
    }
}
module.exports.curl = curl;