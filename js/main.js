// API call:
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
// Parameters:
// lat, lon coordinates of the location of your interest

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


});
