# IP to location using hostip.info

usage:

	require("hostip").lookup(ip, [includeLocation], callback);

	* ip = IPv4 string
	* includeLocation = get the longitude and latitude as well
	* callback = function(err, data) where the data is a JSON object

For more info please see http://www.hostip.info/
