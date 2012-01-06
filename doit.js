var filename = process.argv[2];
var crypto = require('crypto');
var fs = require('fs');
 
var shasum = crypto.createHash('sha256');
 
var s = fs.ReadStream(filename);
s.on('data', function(d) {
  shasum.update(d);
});
 
s.on('end', function() {
  var d = shasum.digest('hex');
  console.log(d + '  ' + filename);
});
