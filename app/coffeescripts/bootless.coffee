$ () ->
  class App.BootlessView extends Backbone.View
    constructor : ( @el, @template ) ->
      this.initialize()
    events : 
      'click input[type=submit]' : 'submit'
    initialize : ->
      this.render()
    render : ->
	  return @el
