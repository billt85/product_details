// const router = require()
const express = require('express');
const router = express.Router();
const { get } = require('./controller');

router.route('/products')
    .get(get)

module.exports = router;
