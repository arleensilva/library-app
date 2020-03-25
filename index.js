const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
})

const router = express.Router();
router.use('/', routes);
app.use('/', router);


// Swagger definition
const swaggerDefinition = {
    info: {
        title: 'Library API',
        version: '1.0.0',
        description: 'A simple REST API to manage a library',
    },
    host: `localhost:${PORT}`, // Host (optional)
    basePath: '/', // Base path (optional)
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    apis: ['./routes.js'],
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

mongoose.connect('mongodb://localhost/library').then(() => {
    console.log('MongoDB connected!');
})


app.listen(PORT,function() {
    console.log(`Backend is running on port ${PORT}!`);
})
