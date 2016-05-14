'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Urls = mongoose.model('Urls', new Schema({
	id: { type: String },
  url: { type: String },
  shortUrl: { type: String },
  hits: { type: Number },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  aggregate: { type: Boolean, default: true }
}).pre('save', function(next) {
	var doc = this;
  this.constructor.findOne().sort('-id').exec(function(err, count) {
  	count = parseInt((count && count.id) || 0) + 1;
	  if(err) return next(err);
	  doc.id = count;
	  next();
  });
}));

module.exports = Urls;