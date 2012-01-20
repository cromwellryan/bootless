(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  App.BootlessView = (function() {

    __extends(BootlessView, Backbone.View);

    function BootlessView(el, template) {
      this.el = el;
      this.template = template;
      this.initialize();
    }

    BootlessView.prototype.events = {
      'click input[type=submit]': 'submit'
    };

    BootlessView.prototype.initialize = function() {
      this.css_link_template = _.template($('#css_link_template').html());
      return this.render();
    };

    BootlessView.prototype.render = function() {
      return this.el;
    };

    return BootlessView;

  })();

}).call(this);
