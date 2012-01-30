fs = require('fs')
assert = require('assert')
_ = require('underscore')

variables =
	toLess: (params)->

		
		lines = []

		orelse = (color, alt) -> if color then color else alt
		defaults =
			linkColor: "#0069d6"
			black: "#000"
			white: "#fff"
			grayDark: "#333"
			gray: "#555"
			grayLight: "#999"
			grayLighter: "#eee"

		defaultorelse = (param) -> orelse(params[param], defaults[param])

		lines.push("@linkColor: " + defaultorelse("linkColor"))
		lines.push("@linkColorHover: darken(@linkColor, 15)")
		lines.push("@black: " + defaultorelse("black"))
		lines.push("@white: " + defaultorelse("white"))
		lines.push("@grayDark: " + defaultorelse("grayDark"))
		lines.push("@gray: " + defaultorelse("gray"))
		lines.push("@grayLight: " + defaultorelse("grayLight"))
		lines.push("@grayLighter: " + defaultorelse("grayLighter"))

		lines.join("\n")

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

	it 'defaults black to 000', ->
		params = { }

		assertLessParam(params, '@black: #000')

	it 'custom black', -> 
		params =
			black: '#001'

		assertLessParam(params, '@black: #001')

	it 'default white', ->
		params = {}

		assertLessParam(params, '@white: #fff')

	it 'custom white', ->
		params =
			white: '#f2f2'

		assertLessParam(params, '@white: #f2f2')

	it 'default grayDark', ->
		params = { }

		assertLessParam(params, '@grayDark: #333')

	it 'custom grayDark', ->
		params = 
			grayDark: '#3453'

		assertLessParam(params, '@grayDark: #3453')

	it 'default gray', ->
		params = {}

		assertLessParam(params, '@gray: #555')

	it 'custom gray', ->
		params =
			gray: '#552'

		assertLessParam(params, '@gray: #552')

	it 'default grayLight', ->
		params = {}

		assertLessParam(params, '@grayLight: #999')

	it 'custom grayLight', ->
		params =
			grayLight: '#828111'

		assertLessParam(params, '@grayLight: #828111')

	it 'default grayLighter', ->
		params = {}

		assertLessParam(params, '@grayLighter: #eee')

	it 'custom grayLighter', ->
		params =
			grayLighter: '#828331'

		assertLessParam(params, '@grayLighter: #828331')

