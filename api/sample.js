var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/', function (req, res, next) {

    res.send('{"message":"Sample success!"}')

});



module.exports = router;