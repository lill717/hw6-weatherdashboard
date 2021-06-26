var today = moment();
var city = "";

const iconUrl = "https://api.openweathermap.org/img/wn/";
const apiKey = "f3e06e3f6da3749bb7e73025459954e1";

let fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=";
let weatherCard = $(".card");
let forcastCard = $(".fiveday");

// Get current forecast to display along with temperature, the humidity, the wind speed, and the UV index
function currentWeather(city) {

const tempUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
console.log(tempUrl)
    fetch(tempUrl)
        .then(function (response) {
            return response.json();
            // console.log("dog");
        })
        .then(function (data) {
            // console.log("doooog");

            console.log(data    )
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

            let lat = data.coord.lat;
            let lon = data.coord.lon;
            currentWeather2(lat, lon, fiveDayUrl);
        });
}

function currentWeather2(lat, lon, tempUrl) {
    tempUrl = fiveDayUrl + lat + "&lon="+ lon  + "&exclude=minutely,hourly&alerts" + "&appid=" + apiKey;
    fetch(tempUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            let uvIndex = $("#uv-index");
            uvIndex.text(data.current.uvi);

            if (data.current.uvi < 3) {
                uvIndex.attr("class", "uvIndex-low");
                uvIndex.css("background-color", "blue");
            }
            else if (data.current.uvi < 6) {
                uvIndex.attr("class", "uvIndex-medium");
                uvIndex.css("background-color", "#56bc56");

            }
            else if (data.current.uvi < 8) {
                uvIndex.attr("class", "uvIndex-high");
                uvIndex.css("background-color", "yellow");

            }
            else if (data.current.uvi < 11) {
                uvIndex.attr("class", "uvIndex-very-high");
                uvIndex.css("background-color", "orange");

            }
            else if (data.current.uvi > 10) {
                uvIndex.attr("class", "uvIndex-extremely-high");
                uvIndex.css("background-color", "red");

            }

            console.log(data);

            for(var i = 0; i < 5; i++){
                console.log(data.daily[i]);












            }

        })
    }
 
    // }

    // function savedCities(city) {
    //     if (citySearch.length === SEARCH_LIMIT) {
    //         citySearch.pop();
    //     }
    //     citySearch.push(cityArrayToStore);
    //     localStorage.setItem(KEY_CITY, JSON.stringify(citySearch));
    // }
    // // Retrieves locally stored cities.
    // function retrieveCities() {
    //     if (localStorage.getItem(city)) {
    //         return JSON.parse(localStorage.getItem(city));
    //     } else {
    //         return citySearch;
    //     }
    // }
    // citiesSearched = retrieveCities();





$("#search").on("click", function (e) {
    e.preventDefault();
    console.log("search btn clicked");

    var value = $("#city-name").val();
    currentWeather(value);

})