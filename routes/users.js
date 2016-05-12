'use strict';

var express = require('express'),
		router = express.Router(),
		User = require('../models/users');

router.post('/', function(req, res, next){
  var user = new User();
	user.id = req.body.id;
  user.save(function(err, data){
  	var code = 409;
  	if(err === null){
  		code = 201;
  		data = { id: data.id };
  	};
  	res.status(code).send(data);
	});
});

module.exports = router;