
fs = require('fs')
assert = require('assert')
_ = require('underscore')

variables : () ->
    toLess: (params) -> 
      "@linkColor: " + ( params.linkColor == "undefined" ? "#0069d6;" : params.linkColor) + "\n" + "@linkColorHover: darken(@linkColor, 15);"

describe 'variables', ->
  assertContainsLine = (less, expected) ->
    lines = less.split('\n')
    assert.ok(_.include(lines, expected));

  assertLessParam = (params, expected) ->
    less = variables.toLess(params)
    assertContainsLine(less, expected);

  it 'default linkColor', ->
    params = { };
    assertLessParam(params, '@linkColor: #0069d6;')

  it 'custom linkColor', ->
    params = { linkColor: "#0f0f0f;" }
    assertLessParam(params, '@linkColor: #0f0f0f;')

  it 'default linkColorHover', ->
    params = { }
    assertLessParam(params, '@linkColorHover: darken(@linkColor, 15);')

  it 'custom linkColorHover ignored', ->
    params = { linkColorHover: "asdfqwer" }
    assertLessParam(params, '@linkColorHover: darken(@linkColor, 15);')