'use strict';

var express = require('express'),
		router = express.Router(),
		codes = require('../config/codes'),
		User = require('../models/users'),
    Urls = require('../models/urls'),
    service = require('../services/service');

router.post('/', function(req, res, next){
  var user = new User();
	user.id = req.body.id;
  var promisse = user.save();
  promisse.then(function(data) {
    res.status(codes.CREATED_CODE);
    res.send({ id: data.id });
  }).catch(function(err){
    res.status(codes.CONFLICT_CODE).send();
  });
});

router.post('/:userid/urls', function(req, res, next){
  var promisse = User.findOne({
    id: req.param('userid')
  }).exec();
  promisse.then(function(user) {
    if(user){
      var urls = new Urls();
      urls.hits = 0;
      urls.url = 'www.google.com';
      urls.shortUrl = 'http://short.url.com/teste';
      urls.userId = user;
      return urls.save().then(function(url){
        return url;
      });
    }else{
      res.status(codes.NOTFOUND_CODE).send();
    }
  }).then(function(url) {
    res.status(codes.CREATED_CODE);
    res.send({
      id: url.id,
      hits: url.hits,
      url: url.url,
      shortUrl: url.shortUrl
    });
  }).catch(function(err){
    res.status(codes.CONFLICT_CODE).send();
  });
});

router.get('/:userId/stats', service.stats);

router.delete('/:userId', function(req, res, next){
  var promisse = User.remove({
    id: req.param('userId')
  }).exec();
  promisse.then(function(data) {
  	res.status(codes.NOTCONTENT_CODE)
    if(data.result.n === 0) res.status(codes.NOTFOUND_CODE);
  	res.send();
  }).catch(function(err){
    res.status(codes.BADREQUEST_CODE).send();
  });
});

module.exports = router;