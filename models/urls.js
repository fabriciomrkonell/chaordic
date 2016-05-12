'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Urls = mongoose.model('Urls', new Schema({
  url: { type: String },
  hits: { type: Number },
  url: { type: String }
}));

module.exports = Urls;