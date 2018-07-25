var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var new_json = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": 'http://lorempixel.com/400/400/people'
	};
	data.friends.push(new_json);
	// console.log(new_json);
	res.render('index', data);
 }