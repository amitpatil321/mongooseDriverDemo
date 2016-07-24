var mongoose = require("mongoose");
var schema   = mongoose.Schema;

mongoose.connect('mongodb://localhost/users');

var userSchema = new schema({
	name  : String,
	email : { type : String, require: true },
	city  : String
});

console.log("Started...");

var user = mongoose.model("user",userSchema);

module.exports = user;

var newuser = user({
	name  : 'Baydi maushi',
	email : 'maushi@gmail.com',
	city  : 'Wing'
});

mongoose.connection.once('open', function(){

	user.find({name: 'Baydi maushi'},function(err, response){
	 console.log(response);
	});

	newuser.save(function(err){
		if(err) console.log("Unexpected error");
		console.log("New user added");
	});
});