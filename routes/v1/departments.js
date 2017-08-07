var express = require('express');
var departmentsService = require('../../services/departments');

var router = express.Router();

/**
 * @swagger
 * /departments:
 *   get:
 *     description: Gets all departments
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: Departments
 */
router.route('/departments')
  .get( (req, res, next) => {
  	departmentsService.getAll()
  	.then(function(value){
  		res.json(value);	
  	})
  	.done();
  });

/**
 * @swagger
 * /departments/{departmentId}:
 *   get:
 *     description: Gets the department
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: departmentId
 *         description: Department
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Department found
 */
router.route('/departments/:departmentId')
  .get( (req, res, next) => {
  	departmentsService.get(req.params.departmentId)
  	.then(function(value){
  		res.json(value);
  	}) 
  	.done();
  });

module.exports = router;
