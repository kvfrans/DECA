var fs = require("fs");
var host = "127.0.0.1";
var port = 8000;
var express = require("express");

var app = express();
//app.use(app.router); //use both root and other routes below
app.use(express.static(__dirname + "")); //use static files in ROOT/public folder

app.get("/", function(request, response){ //root dir
    response.send("Hello!!");
});

var io = require('socket.io').listen(app.listen(process.env.PORT || port));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.post('/register', function(req, res) {
    console.log("got post");
    console.log(req.body.firstname)
    console.log(req.body.birthday)
    var member = new Member({
    	firstname: req.body.firstname,
    	lastname: req.body.lastname,
    	grade: req.body.grade,
    	birthday: req.body.birthday,
    	email: req.body.email,
    	studentID: req.body.studentID
    })
    member.save(function (err, member) {
	  if (err) return console.error(err);
	  console.log("saved");
	});

});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
});

var memberSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    grade: Number,
    birthday: String,
    email: String,
    studentID: String
});
var Member = mongoose.model('Member', memberSchema);
