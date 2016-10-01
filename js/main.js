// OpenWeather API Key: 664847130300b965105640259c4f4829
//API call:
// http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
// Parameters:
// APPID {APIKEY} is your unique API key

$(document).ready(function() {
		var apiKey,
				lat,
				lon;
    function success(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        apiKey = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + '664847130300b965105640259c4f4829';
        $.getJSON(apiKey, function(data) {
            console.log(data);
            $("#main-icon").html("<h2>" + data.weather[0].description + "</h2>");
        });
    }

    navigator.geolocation.getCurrentPosition(success);
})
