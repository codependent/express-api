var express = require('express');
var usersService = require('../../services/users');

var router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     description: Gets all users
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: Users
 */
router.route('/users')
  .get( (req, res, next) => {
  	usersService.getAll()
  	.then(function(value){
  		res.json(value);	
  	})
  	.done();  	
  });

/**
 * @swagger
 * /users/{user}:
 *   get:
 *     description: Gets the user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: Username
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User found
 */
router.route('/users/:user')
  .get( (req, res, next) => {
  	usersService.get(req.params.user)
  	.then(function(value){
  		res.json(value);
  	})
  	.done();  	  	
  });

module.exports = router;
