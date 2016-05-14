'use strict';

var codes = require('../config/codes'),
		Users = require('../models/users'),
		Urls = require('../models/urls');

module.exports = {
	stats: function(req, res, next) {
		var userParam = req.param('userId');
		var promisse = Users.findOne({
			id: userParam
		}).exec();
	  promisse.then(function(user) {
			if(user || userParam === undefined){
				var filter = user ? { userId: user._id } : {};
				return Urls.count(filter).exec().then(function(urlCount){
		    	return {
		    		filter: filter,
		    		urlCount: urlCount
		    	};
		 		});
	  	}else{
	  		res.status(codes.NOTFOUND_CODE).send();
	  	}
	 	}).then(function(data) {
	 		if(data){
	 			return Urls.find(data.filter).exec().then(function(urls){
		    	data.hits = 0;
		    	urls.forEach(function(item){
		    		data.hits = data.hits + item.hits;
		    	});
		    	return data;
		 		});
	 		}
	 	}).then(function(data) {
	 		if(data){
	 			return Urls.find(data.filter).limit(10).select('-_id id hits url shortUrl').sort('-hits').exec().then(function(urls){
		 			delete data.filter;
		 			data.topUrls = urls;
		    	return data;
		 		});
	 		}
	  }).then(function(data){
	  	res.status(codes.OK_CODE).send(data);
	  }).catch(function(err){
	  	console.log(err);
	    res.status(codes.CONFLICT_CODE).send();
	  });
	}
};