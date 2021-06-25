var today = moment();
var cityInput = "";

const tempUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=";
const iconUrl = "https://api.openweathermap.org/img/wn/";
const apiKey = "f3e06e3f6da3749bb7e73025459954e1";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKey + "&units=imperial";
let weatherCard = $(".card");
let forcastCard = $(".fiveday");


// Search for city
function cityWeather(cityInput) {
    if (city == "") {
        city == cityInput;
        cityWeather(tempUrl);
    }
    else {
        city == cityInput;
        today.subtract(5, "days");
        currentWeather(tempUrl);
    }
}

// Get current forecast to display along with temperature, the humidity, the wind speed, and the UV index
function currentWeather(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            let today = $("#saved-city-name");
            let cityWeather = $("temp");
            let humidity = $("#humidity");
            let windSpeed = $("#wind");
            let uv = $("#uv-index");

            //Displays temperature, the humidity, the wind speed, and the UV index
            today.text(data.name + "(" + today.format("L") + ")");
            cityWeather.attr("src", iconUrl + data.weather[0].icon + "@2x.png");





        })
}



