let express = require('express');
let app = express();
let bodyParser = require('body-parser');
require('dotenv').config();

console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'));

app.use(function middleware(req, res, next){
    console.log(req.method+' '+req.path+' '+'-'+' '+req.ip);
    next();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/json', function(req, res) {
    process.env.MESSAGE_STYLE
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message": "HELLO JSON"})
    }
    else{
        res.json({"message": "Hello json"})
    };
});

app.get('/now', function middleware(req,res,next){
    req.time = new Date().toString();
    next();
}, function (req, res){
    res.json({"time": req.time});
});

app.get('/:word/echo', function(req,res){
    res.json({"echo": req.params.word});
});

app.use(function middleware(req,res,next){
    bodyParser.urlencoded({extended:false});
    next();
})

app.route('/name').get(function(req,res){
    res.json({"name": req.query.first+" "+req.query.last})
}).post(function (req, res){
    
});

































 module.exports = app;
