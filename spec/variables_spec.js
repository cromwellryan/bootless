
var fs = require('fs')
	, assert = require('assert')
	, _ = require('underscore');

var variables = function(){ 
	return { 
		toLess: function(params) { 
			return "@linkColor: " + (typeof params.linkColor === "undefined" ? "#0069d6;" : params.linkColor);
		}
	};
}();

describe( 'variables', function() {

	it('default linkColor', function() {
		var params = { };

		var matches = variables.toLess(params).match(/^\@linkColor\:\s*\#0069d6;$/);
		assert.notEqual( matches, null);
	});

	it('custom linkColor', function() {
		var params = { linkColor: "#0f0f0f;" };

		var lines = variables.toLess(params).split('\n');
		
		assert.ok(_.include(lines, '@linkColor: #0f0f0f;'));

	});


});
