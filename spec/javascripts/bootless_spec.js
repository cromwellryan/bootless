(function() {

  describe("BootlessView", function() {
    describe("Loads the template", function() {
      var _this = this;
      beforeEach(function() {
        setFixtures("<div id=\"bootless\">The bootless div.</div>\n<stylesheet type=\"text/template\" id=\"css_link_template\">This will be a link in the header.</script>");
        return _this.view = new App.BootlessView('#bootless', '#css_link_template');
      });
      it("loads the css template", function() {
        return expect(_this.view.css_link_template).toBeDefined();
      });
      it("is a DIV", function() {
        return expect(_this.view.el.nodeName).toEqual("DIV");
      });
      return it("returns the view object", function() {
        return expect(_this.view.render()).toEqual(_this.view);
      });
    });
    return describe("Submit state", function() {
      return describe("When submit button handler fired - Jasmine async", function() {
        beforeEach(function() {
          spyOn($, "ajax").andCallFake(function(options) {
            return options.success();
          });
          setFixtures("<head>\n<link id=\"bootstrap\" rel=\"stylesheet\" media=\"screen\" href=\"replaceme.css\">\n</head>\n<div id=\"bootless\">\n  <form><input type=\"submit\"></form>\n</div>\n<script type=\"text/template\" id=\"css_link_template\">This will be a link in the header.</script>");
          return this.view = new App.BootlessView('#bootless', '#css_link_template');
        });
        it("posts to the server", function() {
          var callback;
          callback = jasmine.createSpy();
          this.view.getCss(callback);
          return expect(callback).toHaveBeenCalled();
        });
        return it("uses the new css in the head element", function() {
          return this.view.modifyHead('abc');
        });
      });
    });
  });

}).call(this);
