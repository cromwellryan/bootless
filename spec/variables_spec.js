
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
	
	function assertContainsLine(less, expected) {
		var lines = less.split('\n');

		assert.ok(_.include(lines, expected));
	
	}

	function assertLessParam(params, expected) {
		var less = variables.toLess(params);

		assertContainsLine(less, expected);
	}

	it('default linkColor', function() {
		var params = { };

		assertLessParam(params, '@linkColor: #0069d6;');
	});

	it('custom linkColor', function() {
		var params = { linkColor: "#0f0f0f;" };

		assertLessParam(params, '@linkColor: #0f0f0f;');

	});

	it('default linkColorHover', function() {
		var params = { };

		assertLessParam(params, '@linkColorHover: darken(@linkColor, 15);');
	});

	it('custom linkColorHover ignored', function() {
		var params = { linkColorHover: "asdfqwer" };

		assertLessParam(params, '@linkColorHover: darken(@linkColor, 15);');
	});



});
