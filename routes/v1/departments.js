const express = require('express');
const departmentsService = require('../../services/departments');
const router = express.Router();

/**
 * @swagger
 * /departments:
 *   get:
 *     description: Gets all departments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Departments
 */
router.route('/departments')
  .get( (req, res, next) => {
  	departmentsService.getAll()
  	.then( (value) => {
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
  	.then( (value) => {
  		res.json(value);
  	}) 
  	.done();
  });

module.exports = router;
