  describe "BootlessView", ->
    beforeEach ->
      this.view = new App.BootlessView({el:'#bootless', template:'css'})
      setFixtures("""
        <div id="bootless"></div>
        <stylesheet type="text/template" id="css_link_template">This will be a link in the header.</script>
        """
      )
    it "loads the css template", ->
      expect(this.templates.css).toBeDefined()

    describe "Root element", 
      it "is a DIV", ->
        expect(this.view.el.nodeName).toEqual("DIV")

    describe "Rendering", ->
      it "returns the view object", ->
        expect(this.view.render()).toEqual(this.view)

    describe "Submit state", ->
      xdescribe "When submit button handler fired - Jasmine async", ->
        beforeEach ->
          this.view.render.find('input[type=submit]').trigger('click')

        it "posts to the server", ->
          null
        it "uses the new css in the head element", ->
          null