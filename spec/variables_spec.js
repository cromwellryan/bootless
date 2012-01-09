
var fs = require('fs')
	, assert = require('assert')
	, _ = require('underscore');

var variables = function(){ 
	return { 
		toLess: function(params) { 
			return "@linkColor: " + (typeof params.linkColor === "undefined" ? "#0069d6;" : params.linkColor) + "\n" +
							"@linkColorHover: darken(@linkColor, 15);";
		}
	};
}();

describe( 'variables', function() {

	it('default linkColor', function() {
		var params = { };

		var lines = variables.toLess(params).split('\n');

		assert.ok(_.include(lines, '@linkColor: #0069d6;'));
	});

	it('custom linkColor', function() {
		var params = { linkColor: "#0f0f0f;" };

		var lines = variables.toLess(params).split('\n');
		
		assert.ok(_.include(lines, '@linkColor: #0f0f0f;'));

	});

	it('default linkColorHover', function() {
		var params = { };

		var lines = variables.toLess(params).split('\n');
		
		assert.ok(_.include(lines, '@linkColorHover: darken(@linkColor, 15);'));

	});



});
