App.BootlessView = class BootlessView extends Backbone.View
  constructor : ( @el_id, @template ) ->
    this.initialize()
  events : 
    'click input[type=submit]' : 'submit'
  initialize : ->
    console.log $(@el_id).length
    @css_link_template = _.template $(@template).html()
    @el = $(@el_id)[0]
    console.log (@el)
    this.render()
  render : ->
    return this
    