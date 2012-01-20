(function() {
  var BootlessView;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  App.BootlessView = BootlessView = (function() {

    __extends(BootlessView, Backbone.View);

    function BootlessView(el_id, template) {
      this.el_id = el_id;
      this.template = template;
      this.initialize();
    }

    BootlessView.prototype.events = {
      'click input[type=submit]': 'submit'
    };

    BootlessView.prototype.initialize = function() {
      console.log($(this.el_id).length);
      this.css_link_template = _.template($(this.template).html());
      this.el = $(this.el_id)[0];
      console.log(this.el);
      return this.render();
    };

    BootlessView.prototype.render = function() {
      return this;
    };

    return BootlessView;

  })();

}).call(this);
