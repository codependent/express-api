var express = require('express');
var usersRoute = require('./users');
var departmentsRoute = require('./departments');

var router = express.Router();

/* GET users listing. */
router.use('/v1', usersRoute);
router.use('/v1', departmentsRoute);

module.exports = router;