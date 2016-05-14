'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Urls = mongoose.model('Urls', new Schema({
	id: { type: Number },
  url: { type: String },
  shortUrl: { type: String },
  hits: { type: Number },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
}).pre('save', function(next) {
	var doc = this;
  this.constructor.findOne().sort('-id').exec(function(err, count) {
  	if(doc.id === undefined){
  		count = parseInt((count && count.id) || 0) + 1;
	  	if(err) return next(err);
	  	doc.id = count;
  	}
  	next();
  });
}));

module.exports = Urls;