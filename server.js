
var express = require('express');
var app = express();
var request = require('request');
var appAPI = require('./src/js/utils/appAPI.js');


var url = appAPI.url;



request.get(url, function(error, steamHttpResponse, steamHttpBody) {
    // Print to console to prove we downloaded the achievements.
    console.log(steamHttpBody);
});


app.get('/steaminfo', function(httpRequest, httpResponse) {
    // Calculate the Steam API URL we want to use
    var url = appAPI.url;;
    //+
      //  httpRequest.params.appid;
    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.send(steamHttpBody);
    });
});



app.use('/', express.static('public'));



var bodyParser = require('body-parser');

app.use(bodyParser.text());



var port = 8080;
var server = app.listen(port);
console.log('Listening on port ' + port);

