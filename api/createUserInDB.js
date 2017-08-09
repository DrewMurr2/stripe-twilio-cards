//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


router.use(bodyParser.json())
router.post('/', function (req, res) {

    //instantiations
    var email = req.body.owner.email

    var stripe = function () { return require('./interfaces/stripe').stripe }
    var newCustomer = function () {
        return stripe().newCustomer({
            email: email,
            description: "User account for: " + email,
            source: req.body.id
        })
    }


    newCustomer().post(result => {
        console.log('result', result)
        res.send(result)
    });
})
module.exports = router;






