//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


router.use(bodyParser.json())
router.post('/', function (req, res) {
    var validateUser = require('./functions/validateUser').validateUser
    validateUser(req.body, user => {
        if (user) {
            var stripe = require('./interfaces/stripe').stripe
            var newCustomer = stripe.newCustomer({
                email: user.email,
                description: "User account for: " + user._id,
                source: user.stripe
            })
            newCustomer.post(result => {
                console.log(result);
                res.send(result)
            })
        } else {
            res.send({ error: 'Error vaildating user' })
        }
    })
});

module.exports = router;






