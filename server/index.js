const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./routers');

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan('dev'));
server.use('/', router);

/*Static File */
server.use(express.static(path.join(__dirname, '../client/dist')));

/* routes */

server.listen(port, () => console.log(`Listening on port ${port}`))