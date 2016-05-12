'use strict';

var express = require('express'),
		router = express.Router(),
		codes = require('../config/codes'),
		User = require('../models/users');

router.post('/', function(req, res, next){
  var user = new User();
	user.id = req.body.id;
  user.save(function(err, data){
  	res.status(codes.CONFLICT_CODE);
  	if(err === null){
  		res.status(codes.CREATED_CODE);
  		data = { id: data.id };
  	};
  	res.send(data);
	});
});

router.post('/:userid/urls', function(req, res, next){
  var user = new User();
	user.id = req.body.id;
  user.save(function(err, data){
  	res.status(codes.CONFLICT_CODE);
  	if(err === null){
  		res.status(codes.CREATED_CODE);
  		data = { id: data.id };
  	};
  	res.send(data);
	});
});

router.delete('/:userId', function(req, res, next){
  User.remove({
    id: req.param('userId')
  }, function(err, data) {
  	res.status(codes.NOTCONTENT_CODE)
  	if(err){
  		res.status(codes.BADREQUEST_CODE);
  	}else{
  		if(data.result.n === 0) res.status(codes.NOTFOUND_CODE);
  	}
  	res.send();
  });
});

module.exports = router;