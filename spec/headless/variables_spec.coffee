fs = require('fs')
assert = require('assert')
_ = require('underscore')

variables =
	toLess: (params)->
		color = if params.linkColor then params.linkColor else "#0069d6"
		"@linkColor: " + color  + "\n" + "@linkColorHover: darken(@linkColor, 15)"

describe 'variables', ->
	
	assertContainsLine = (less, expected) ->
		lines = less.split('\n')

		assert.ok(_.include(lines, expected))

	assertLessParam = (params, expected) ->
		less = variables.toLess(params)

		assertContainsLine(less, expected)

	it 'default linkColor', ->
		params = { }

		assertLessParam(params, '@linkColor: #0069d6')

	it 'custom linkColor', ->
		params = 
			linkColor: "#0f0f0f"

		assertLessParam(params, '@linkColor: #0f0f0f')

	it 'default linkColorHover', ->
		params = { }

		assertLessParam(params, '@linkColorHover: darken(@linkColor, 15)')

	it 'custom linkColorHover ignored', ->
		params = { linkColorHover: "asdfqwer" }

		assertLessParam(params, '@linkColorHover: darken(@linkColor, 15)')
