var express = require('express');
var departmentsService = require('../../services/departments');

var router = express.Router();

/* GET departments listing. */
router.route('/departments')
  .get( (req, res, next) => {
  	departmentsService.getAll()
  	.then(function(value){
  		res.json(value);	
  	})
  	.done();
  });

router.route('/departments/:user')
  .get( (req, res, next) => {
  	departmentsService.get(req.params.user)
  	.then(function(value){
  		res.json(value);
  	}) 
  	.done();
  });

module.exports = router;
