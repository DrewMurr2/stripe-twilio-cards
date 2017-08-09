var stripe = {
    curl: function () { return require('./curl').curl },
    newCustomer: function (options) {
        var curl = stripe.curl()
        curl.url = 'https://api.stripe.com/v1/customers'
        curl.user = "sk_test_QyiyUJRwdE9Cfi49SxtJ3pHa"
        curl.body = options || {}
        return curl
    }

}
module.exports.stripe = stripe;
