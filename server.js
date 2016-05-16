var express = require('express');
var app = express();

//Sets the view engine as ejs
app.set('view engine','ejs');

//Use the public directory for serving the static files
app.use(express.static(__dirname + '/public'));

// routes for app
app.get('/', function(req, res) {
  res.render('editor');
});
app.get('/(:id)', function(req, res) {
  res.render('editor');
});

// get sharejs dependencies
var sharejs = require('share');

// set up redis server
var redisClient;
console.log(process.env.REDISTOGO_URL);
if (process.env.REDISTOGO_URL) {
  var rtg   = require("url").parse(process.env.REDISTOGO_URL);
  redisClient = require("redis").createClient(rtg.port, rtg.hostname);
  redisClient.auth(rtg.auth.split(":")[1]);
} else {
  redisClient = require("redis").createClient();
}

// options for sharejs 
var options = {
  db: {type: 'redis', client: redisClient}
};

// attach the express server to sharejs
sharejs.server.attach(app, options);

//listen on the specified port for incoming connections
var port = process.env.PORT || 8000;
app.listen(port, function(){
    console.log("Listening on http://localhost:" + port);
});
