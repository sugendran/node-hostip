var http = require('http'),
	qs = require('querystring');

exports.lookup = function(userIp, includeLocation, callback){
	if(typeof(includeLocation) == "function"){
		callback = includeLocation;
		includeLocation = false;
	}
	var args = {ip: userIp};
	if(includeLocation){
		args.position = true;
	}
	var options = { 
		host: "api.hostip.info", 
		path: "/get_html.php?" + qs.stringify(args) 
	};
	http.get(options, function(res){
		var data = "";
		var httpEnd = function(){
			if (res.statusCode == 200){
				var result = { };
				var lines = data.split("\n");
				for(var i=0;i<lines.length;i++){
					var x = lines[i].indexOf(": ");
					if(x > 0){
						result[lines[i].substr(0, x)] = lines[i].substr(x + 2);
					}
				}
				callback(null, result);
			} else {
				callback(new Error("Response status code: " + res.statusCode), data);
			}
		};
		res.on('data', function (chunk) {
			data += chunk;
		});
		res.on('end', httpEnd);
		res.on('close', httpEnd);
	}).on("error", function(err){
		callback(err); 
	});
}