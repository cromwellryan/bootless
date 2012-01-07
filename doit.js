// Read in the variables file
// Read in the boot strap file
// parse the whole damn thing

var fs = require('fs')
	, less = require('less');


function doit() {
	fs.readFile('./bootstrap/lib/variables.less', function(err, data) {
		var template = data;

		fs.readFile('./bootstrap/lib/bootstrap.less', function(err, data) {
			var tobeparsed = template + '\n' + data;

			var parser = new(less.Parser)( { 
				paths: ['../bootstrap/lib/']
			});


			parser.parse(tobeparsed, function(err, tree) {
				var css = tree.toCSS( {compress: true} );
				console.log(css);
			});
		});
	});
	
};

doit();
