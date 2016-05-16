var express = require('express');
var app = express();

//Sets the view engine as ejs
app.set('view engine','ejs');

//Use the public directory for serving the static files
app.use(express.static(__dirname + '/public'));

//listen on the specified port for incoming connections
var port = process.env.PORT || 8000;
app.listen(port, function(){
    console.log("Listening on http://localhost:" + port);
});
