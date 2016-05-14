'use strict';

var express = require('express'),
		router = express.Router(),
		codes = require('../config/codes'),
		Urls = require('../models/urls'),
		service = require('../services/service');

router.get('/', service.stats);

router.get('/:id', function(req, res, next) {
  var promisse = Urls.findOne({
  	id: req.param('id')
  }).select('-_id id hits url shortUrl').exec();
  promisse.then(function(data) {
  	res.status(codes.OK_CODE);
  	if(!data){
  		res.status(codes.NOTFOUND_CODE);
  	}
  	res.send(data);
 	}).catch(function(err){
    res.status(codes.BADREQUEST_CODE).send();
  });
});

module.exports = router;