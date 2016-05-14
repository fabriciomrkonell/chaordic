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
      url.hits = url.hits + 1;
      console.log(url)
      url.save();
      res.redirect(codes.REDIRECT_CODE, url.url);
    }
  }).catch(function(err){
    res.status(codes.BADREQUEST_CODE).send();
  });
});

module.exports = router;