var randomstring = require('randomstring');
var db = require('../database/db.js');
var urls = {};



exports.generateAdminUrl = function() {
	var url;

	do {
		url = 'a/' + randomstring.generate(10);
	} while (urls[url])

	urls[url] = true;
	return url;
};

exports.generateUserUrl = function() {
	var url;

	do {
		url = randomstring.generate(10);
	} while (urls[url])

	urls[url] = true;
	return url;
};
