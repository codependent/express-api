const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const peopleRoute = require('./people');

var router = express.Router();

var options = {
  swaggerDefinition: {
    info: {
      title: 'Star Wars API', // Title (required)
      version: '1.0.0', // Version (required)

    },
    basePath: '/api/v1',
  },
  apis: ['routes/v1/people.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
var swaggerSpec = swaggerJSDoc(options);
router.get('/v1/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

router.use('/v1/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
router.use('/v1', peopleRoute);


module.exports = router;