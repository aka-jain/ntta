// server.js

// set up ========================
var express = require('express');
var app = express();
var http = require('http').Server(app); // create our app w/ express


app.use(express.static(__dirname + '')); // set the static files location /public/img will be /img for users


http.listen(process.env.PORT || 3000, function() {
    console.log('listening on', http.address().port);
});
