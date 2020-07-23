//var http = require('http'); //this statement import http module

var express=require('express');
var app=express();
app.get("/",function(request,response){
    response.send('this is the home of my website')
});
app.route('/pictures').get(function(request,response){
 response.send("show pictures on this page")
});

app.route('/projects').get(function(request,response){
    response.send("show projects on this page")
   })
 var server=app.listen(3000);
console.log("Server is running at port 3000");





//const { func } = require('prop-types');


// http.createServer(function(requst,response){
//     response.writeHead(200, {'content-type':'text/html'});
//     response.end('<b>Hello world</b>');
// }).listen(8080);

//console.log("Server is running at port 8080");
