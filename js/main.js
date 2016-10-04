//Put Darksky credit on page

'use strict';

$(document).ready(function() {
    function success(position) {
        var lat = position.coords.latitude,
            lon = position.coords.longitude,
            apiKey = "https://api.darksky.net/forecast/76fd2a7656964925d285834a02d97c82/" + lat + ", " + lon + "?exclude=[minutely,hourly,alerts,flags]",
            settings = {
                "async": true,
                "crossDomain": true,
                "url": apiKey,
                "method": "GET",
                "dataType": "jsonp",
                "headers": {
                    "cache-control": "no-cache",
                    "postman-token": "4acc50e3-de9c-74bf-cc03-957b208fc738"
                }
            };
        $.ajax(settings).done(function(response) {
            console.log(response);
            $("#main-icon").html("<h2>" + response.currently.icon + "</h2>");
        });
    }
    navigator.geolocation.getCurrentPosition(success);
});
