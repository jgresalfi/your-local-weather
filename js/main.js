// OpenWeather API Key: 664847130300b965105640259c4f4829
//API call:
// http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
// Parameters:
// APPID {APIKEY} is your unique API key

$(document).ready(function() {
	var apiKey = 'http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=' + '664847130300b965105640259c4f4829';
	$.getJSON(apiKey, function(data) {
		console.log(data);
		$("#main-icon").html("<h2>" + data.weather[0].description + "</h2>");
	});
})