var http = require('http');
var express = require('express');
var app = require('express')();
var bodyParser = require('body-parser');
//some json handlers
// app.use( bodyParser.json() );
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser());
// app.use(express.json());
// app.use(express.urlencoded());


//Routing
app.get('/getTempurature',function(req,res)  {//code for testing
    res.send("7.0°C");
})
app.get('/getBatteryLife',function(req,res)  {//code for testing
    res.send("2hrs");
})
app.get('/getBatteryPercentage',function(req,res)  {//code for testing
    res.send("50%");
})
app.get('/getLidState',function(req,res)  {//code for testing
    res.send("closed");
})
app.get('/setTempurature',function(req,res)  {//code for testing
  res.send("ok");
})
app.get('/getEstimatedTime',function(req,res)  {//code for testing
  res.send("20mins");
})
app.get('/getWarning',function(req,res)  {//code for testing
  res.send("None currently");
})
app.listen(8082, () => {
  console.log('App listening at 8082 port');
})
