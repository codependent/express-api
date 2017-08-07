var express = require('express');
var usersService = require('../../services/users');

var router = express.Router();

/* GET users listing. */
router.route('/users')
  .get(function(req, res, next){
  	console.log("aquiiiiiiiii1")
  	usersService.getAll()
  	.then(function(value){
  		console.log("aquiiiiiiiii2")
  		res.json(value);	
  	})
  	.done();  	
  });

router.route('/users/:user')
  .get(function(req, res, next){
  	usersService.get(req.params.user)
  	.then(function(value){
  		res.json(value);
  	})  	  	
  });

module.exports = router;
