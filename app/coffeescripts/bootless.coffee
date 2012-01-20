class App.BootlessView extends Backbone.View
  constructor : ( @el, @template ) ->
    this.initialize()
  events : 
    'click input[type=submit]' : 'submit'
  initialize : ->
    @css_link_template = _.template $('#css_link_template').html()
    this.render()
  render : ->
    return @el