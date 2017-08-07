const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const usersRoute = require('./users');
const departmentsRoute = require('./departments');

var router = express.Router();

var options = {
  swaggerDefinition: {
    info: {
      title: 'Foo Users API', // Title (required)
      version: '1.0.0', // Version (required)

    },
    basePath: '/api/v1',
  },
  apis: ['routes/v1/departments.js','routes/v1/users.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
var swaggerSpec = swaggerJSDoc(options);


router.get('/v1/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

router.use('/v1/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


router.use('/v1', usersRoute);
router.use('/v1', departmentsRoute);

module.exports = router;