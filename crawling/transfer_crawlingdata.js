'use strict'
import fs from "fs";
import { PythonShell } from 'python-shell';


//일정주기마다 업데이트
var updateCrawling = setInterval(function() {

	PythonShell.run("crawling.py",null,function(err,res){
		if(err) throw err;
		console.log("finished");
	});
   console.log('Renew by one hour');
}, 36000);

