'use strict';

var app = require('./app'),
		config = require('./config/config');

app.set('port', config.NODE_PORT || 3000);

app.listen(app.get('port'), function(){
	console.log('Chaordic started.');
});