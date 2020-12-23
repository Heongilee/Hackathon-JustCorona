import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers.js";
import http from "http";
import express from "express";
import path from "path";
import serve_static from "serve-static";
import { PythonShell } from 'python-shell';
// var http = require('http');
// var express = require('express');
// var path = require('path');
// var serve_static = require('serve-static');


var app = express();
const PORT = 3000;

app.use(serve_static(path.join('./public/Hackathon-JustCorona-master/')));
app.set('port', process.env.PORT || PORT);

app.get('/', function(req, res){
	res.redirect('index.html');
});

app.get('/graphql', function(req, res){
	res.redirect('graphql.html');
});
// app.get('/co')
http.createServer(app).listen(app.get('port'), function(){
	console.log("Server START ..." + app.get('port'));
	console.log("여기로 웹 페이지 접속 가능!! http://hackathon-justcorona-qumsh.run.goorm.io/");	
});

const server = new GraphQLServer({
	typeDefs: "graphql/schema.graphql",
	resolvers
});

//일정주기마다 업데이트
var updateCrawling = setInterval(function() {
	let options = {
		scriptPath: "crawling"
	}
	PythonShell.run("crawling.py",options,function(err,res){
		if(err) throw err;	
		console.log('Renew by one hour');
	});
   
}, 3600000);

server.start(() => console.log("GraphQL Playground 주소는 http://hackathon-graphql.run.goorm.io"));