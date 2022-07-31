"use strict";

$.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: mapBoxWeatherKey,
    q:     "San Antonio, US"
});

function geocode(search = input.value, token = mapBoxWeatherKey) {
    const baseUrl = 'https://api.mapbox.com';
    const endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
            console.log(data.features[0].center)
        });
}


const input = document.getElementById("input")
const btn = document.getElementById("btn")

btn.addEventListener("click", function (event){

})
