'use strict';

var express = require('express'),
		router = express.Router(),
		codes = require('../config/codes'),
		Urls = require('../models/urls');

router.get('/:id', function(req, res, next) {
  var promisse = Urls.findOne({
    id: req.param('id')
  }).exec();
  promisse.then(function(url) {
    if(!url){
      res.status(codes.NOTFOUND_CODE).send();
    }else{
      url.hits = parseInt(url.hits + 1);
      url.save(function(err, url){
        console.log(url);
        res.redirect(codes.REDIRECT_CODE, url.url);
      });
    }
  }).catch(function(err){
    res.status(codes.BADREQUEST_CODE).send();
  });
});

router.delete('/:id', function(req, res, next){
  var promisse = Url.remove({
    id: req.param('id')
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