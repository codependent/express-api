var express = require('express');
var usersService = require('../../services/users');

var router = express.Router();

/* GET users listing. */
router.route('/users')
  .get( (req, res, next) => {
  	usersService.getAll()
  	.then(function(value){
  		res.json(value);	
  	})
  	.done();  	
  });

router.route('/users/:user')
  .get( (req, res, next) => {
  	usersService.get(req.params.user)
  	.then(function(value){
  		res.json(value);
  	})
  	.done();  	  	
  });

module.exports = router;
