'use strict';

var express = require('express'),
		router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello Urls');
});

module.exports = router;