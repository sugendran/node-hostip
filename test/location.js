var hostip = require("../hostip");

if(process.argv.length < 3){
	console.log("Usage: node location.js <IP> [true|false]");
	console.log("Please specify an IP");
	process.exit();
}

var ip = process.argv[2];
var lnglat = false;
if(process.argv.length > 3){
	lnglat = process.argv[3] == "true";
}

hostip.lookup(ip, lnglat, function(err, data){
	if(err){
		console.log(err);
	}
	console.log(JSON.stringify(data));
});


hostip.lookup(ip, function(err, data){
	if(err){
		console.log(err);
	}
	console.log(JSON.stringify(data));
});
