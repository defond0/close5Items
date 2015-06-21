'use strict';
var express = require('express');
var router = express.Router();
var controller = require('./controller.js');

//serve up scripts and styles
router.use('/public', express.static(__dirname+'/'+ 'public'));

router.get('/', controller.getDemo);
router.get('/api/v1/items',controller.getItems);

module.exports = router;