var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path')
var port = process.env.PORT || 8080;

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());   
app.get('*', function (req, res) {

    res.sendFile(path.join(__dirname + '/public/views/index.html')); // this might need to be lower than the routes..
});
app.listen(port);
console.log("App listening on port : " + port);