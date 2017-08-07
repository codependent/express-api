var express = require('express');
var usersService = require('../../services/users');

var router = express.Router();

/* GET users listing. */
router.route('/users')
  .get(function(req, res, next){
  	res.json(usersService.getAll());
  });

router.route('/users/:user')
  .get(function(req, res, next){
  	res.json(usersService.get(req.params.user));
  });

module.exports = router;