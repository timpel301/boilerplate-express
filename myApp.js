let express = require('express');
let app = express();
require('dotenv').config();

console.log('Hello World');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
    process.env.MESSAGE_STYLE
    if(process.env.MESSAGE_STYLE==uppercase){
        res.json({"message": "HELLO JSON"})
    }
    else{
        res.json({"message": "Hello json"})
    };
});


































 module.exports = app;
