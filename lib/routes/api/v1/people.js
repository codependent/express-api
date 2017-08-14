const express = require('express');
const peopleService = require('../../../services/people');
const router = express.Router();

/**
 * @swagger
 * /people:
 *   get:
 *     description: Gets all people
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: people
 */
router.route('/people')
  .get( (req, res, next) => {
  	peopleService.getAll()
  	.then((value) => {
  		res.json(value);	
  	})
    .fail( (error) => {
      res.status(error.message).send(error);
    })
  	.done();  	
  });

/**
 * @swagger
 * /people/{personId}:
 *   get:
 *     description: Gets the person
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: personId
 *         description: personId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Person found
 */
router.route('/people/:personId')
  .get( (req, res, next) => {
  	peopleService.get(req.params.personId)
  	.then( (value) => {
  		res.json(value);
  	})
    .fail( (error) => {
      res.status(error.statusCode).json(error.data);
    })
  	.done();  	  	
  });

module.exports = router;

/**
 * @swagger
 * /people/{personId}/films:
 *   get:
 *     description: Gets the personId films
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: personId
 *         description: personId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Films found
 */
router.route('/people/:personId/films')
  .get( (req, res, next) => {
    console.log("asdfasfdas")
    peopleService.getFilms(req.params.personId)
    .then( (value) => {
      res.json(value);
    })
    .fail( (error) => {
      res.status(error.statusCode).json(error.data);
    })
    .done();        
  });

module.exports = router;
