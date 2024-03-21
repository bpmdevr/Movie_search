const express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.listen(3000, function(){
	console.log("Movie App Server started!");
});

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){
	var query = req.query.search;
	var url = "https://www.omdbapi.com/?apikey=thewdb&s=" + query;
	
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render("searchResult", {data: data});
			
		}
	});
	
});