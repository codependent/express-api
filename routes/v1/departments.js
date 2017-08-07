var express = require('express');
var departmentsService = require('../../services/departments');

var router = express.Router();

/* GET departments listing. */
router.route('/departments')
  .get(function(req, res, next){
  	res.json(departmentsService.getAll());
  });

router.route('/departments/:user')
  .get(function(req, res, next){
  	res.json(departmentsService.get(req.params.user));
  });

module.exports = router;
