var today = moment();
var city = "";

const iconUrl = "https://api.openweathermap.org/img/wn/";
const apiKey = "f3e06e3f6da3749bb7e73025459954e1";
const tempUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";

let fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=";
let weatherCard = $(".card");
let forcastCard = $(".fiveday");


// Search for city
// function cityWeatherSearch() {
//     fetch(tempUrl)
//         if (city == "") {
//             city == cityInput;
//             citySearch(tempUrl);
//         }
//         else {
//             city == cityInput;
//             today.subtract(5, "days");
//             currentWeather(tempUrl);
//         }
// }

// Get current forecast to display along with temperature, the humidity, the wind speed, and the UV index
function currentWeather(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
            console.log(doooog);
        })
        .then(function (data) {
            console.log(doooog);

            let cityAndDate = $("#saved-city-name");
            let iconWeather = $("temp");
            let temp = $("#temp");
            let humidity = $("#humidity");
            let windSpeed = $("#wind");
            let uv = $("#uv-index");

            //Attributes of temperature, the humidity, the wind speed
            cityAndDate.attr("id", "saved-city-name");
            iconWeather.attr("src", iconUrl + data.weather[0].icon + "@2x.png");
            temp.attr("id", "temp");
            humidity.attr("id", "humidity");
            windSpeed.attr("id", "wind");

            //Displays temperature, the humidity, the wind speed
            cityAndDate.text(data.name + "(" + today.format("L") + ")");
            iconWeather.attr("id", "weather-icon");
            temp.text("Temp: " + data.main.temp + "°F");
            humidity.text("Humidity: " + data.main.humidity + "%");
            windSpeed.text("Wind: " + data.wind.speed + "mph");

            cityAndDate.append(iconWeather);
            weatherCard.append(cityAndDate);
            weatherCard.append(temp);
            weatherCard.append(humidity);
            weatherCard.append(windSpeed);

            let lat = data.coord.lat;
            let lon = data.coord.lon;
            currentWeather(lat, lon, fiveDayUrl);
        });
}

function currentWeather(lat, lon, fiveDayUrl) {
    fiveDayUrl = fiveDayUrl + lat + "=&lat" + lon + "=&lon" + "&exclude=minutely,hourly&alerts" + "&appid=" + apiKey;
    fetch(fiveDayUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(doooog);

        })
}
