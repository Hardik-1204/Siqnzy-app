var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mysql= require('mysql');
var connection = mysql.createConnection({
	 host     : 'localhost',
  user     : 'root',
  password : 'MyNewPass',
  database : 'person'
});
connection.connect(function(){
	console.log("Connection Established");
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/addfirst', function(req, res) {
 	var searchtxt = req.query['searchtxt'];
 	
 	connection.query("drop table temp");
 	connection.query("create table temp (name varchar(20))");
 	var addtemp = 'insert into temp '+searchtxt;
 	connection.query(addtemp);
 	connection.query("Insert into global(fname,lname) select name , lname from temp CROSS JOIN lastname;");
 	connection.query("Insert into first(fname,lname) select name , lname from temp CROSS JOIN lastname;");
 	connection.query("Insert into last(fname,lname) select name , lname from temp CROSS JOIN lastname;");
 	var data = 'insert into firstname '+searchtxt+'';
 	connection.query(data, function(err, rows, fields) {
		res.json({
    
  }); 
});	 
});
app.get('/addlast', function(req, res) {
 	var searchtxt = req.query['searchtxt'];
 	connection.query("drop table temp");
 	connection.query("create table temp (name varchar(20))");
 	var addtemp = 'insert into temp '+searchtxt;
 	connection.query(addtemp);
 	connection.query("Insert into global(fname,lname) select fname , name from firstname CROSS JOIN temp;");
 	connection.query("Insert into first(fname,lname) select fname , name from firstname CROSS JOIN temp;");
 	connection.query("Insert into last(fname,lname) select fname , name from firstname CROSS JOIN temp;");
 	var data = 'insert into lastname '+searchtxt;
 	connection.query(data, function(err, rows, fields) {
		res.json({
    	
  }); 
});	 
});
app.get('/first', function(req, res) {
 	var searchtxt = req.query['searchtxt'];
 	var data = 'Select * from first where fname LIKE "'+searchtxt+'%"';
 	connection.query(data, function(err, rows, fields) {
		res.json({
    	rows
  }); 
});	 
});
app.get('/last', function(req, res) {
 	var searchtxt = req.query['searchtxt'];
 	var data = 'Select * from last where lname LIKE "'+searchtxt+'%"';
 	connection.query(data, function(err, rows, fields) {
		res.json({
    	rows
  }); 
});	 
});
app.get('/global', function(req, res) {
 	var searchtxt = req.query['searchtxt'];
 	var data = 'Select * from global where lname LIKE "'+searchtxt+'%" OR fname LIKE "'+searchtxt+'%"';
 	connection.query(data, function(err, rows, fields) {
		res.json({
    	rows
  }); 
});	 
});
app.listen(1337,function(){
	console.log("Port is running on 1337");
});