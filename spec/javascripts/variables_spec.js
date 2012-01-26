(function() {
  var assert, fs, _;

  fs = require('fs');

  assert = require('assert');

  _ = require('underscore');

  ({
    variables: function() {
      return {
        toLess: function(params) {
          var _ref;
          return "@linkColor: " + ((_ref = params.linkColor === "undefined") != null ? _ref : {
            "#0069d6;": params.linkColor
          }) + "\n" + "@linkColorHover: darken(@linkColor, 15);";
        }
      };
    }
  });

  describe('variables', function() {
    var assertContainsLine, assertLessParam;
    assertContainsLine = function(less, expected) {
      var lines;
      lines = less.split('\n');
      return assert.ok(_.include(lines, expected));
    };
    assertLessParam = function(params, expected) {
      var less;
      less = variables.toLess(params);
      return assertContainsLine(less, expected);
    };
    it('default linkColor', function() {
      var params;
      params = {};
      return assertLessParam(params, '@linkColor: #0069d6;');
    });
    it('custom linkColor', function() {
      var params;
      params = {
        linkColor: "#0f0f0f;"
      };
      return assertLessParam(params, '@linkColor: #0f0f0f;');
    });
    it('default linkColorHover', function() {
      var params;
      params = {};
      return assertLessParam(params, '@linkColorHover: darken(@linkColor, 15);');
    });
    return it('custom linkColorHover ignored', function() {
      var params;
      params = {
        linkColorHover: "asdfqwer"
      };
      return assertLessParam(params, '@linkColorHover: darken(@linkColor, 15);');
    });
  });

}).call(this);
