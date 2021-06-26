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
            temp.text(data.main.temp + "°F");
            humidity.text(data.main.humidity + "%");
            windSpeed.text(data.wind.speed + "mph");

            let lat = data.coord.lat;
            let lon = data.coord.lon;
            currentWeather2(lat, lon, fiveDayUrl);
        });
}

function currentWeather2(lat, lon, tempUrl) {
    tempUrl = fiveDayUrl + lat + "&lon="+ lon  + "&exclude=minutely,hourly&alerts" + "&appid=" + apiKey;
    console.log(tempUrl);
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
                uvIndex.css("background-color", "#9999ec");
            }
            else if (data.current.uvi < 6) {
                uvIndex.attr("class", "uvIndex-medium");
                uvIndex.css("background-color", "#56bc56");

            }
            else if (data.current.uvi < 8) {
                uvIndex.attr("class", "uvIndex-high");
                uvIndex.css("background-color", "#f3e864");

            }
            else if (data.current.uvi < 11) {
                uvIndex.attr("class", "uvIndex-very-high");
                uvIndex.css("background-color", "#f3ad64");

            }
            else if (data.current.uvi > 10) {
                uvIndex.attr("class", "uvIndex-extremely-high");
                uvIndex.css("background-color", "#ff9494");

            }

            console.log(data);

            for(var i = 0; i < 6; i++){
                console.log(data.daily[i]);

                const tempUrl = fiveDayUrl + lat + "&lon="+ lon  + "&exclude=minutely,hourly&alerts" + "&appid=" + apiKey;
                $.getJSON(
                    encodeURI(tempUrl),
                    function(data) {
                            
                        if (data !== null && data.list !== null) {
                            var results = data,
                            temp = {};
                            // icon = "https://api.openweathermap.org/img/wn/";  //double check this link
                            console.log(results);
                            
                            // var newDate = ("today++");
                            var weather = [];
                                for(var i = 0; i < 6; i++) {
                                    weather.push( {
                                        date = new Date($("#today").val()),
                                        
                                        console.log(Data)
                                    //     temp: Math.round(results.list[i].temp.day),
                                    //     humidity: results.list[i].humidity.day,
                                    //     wind: results.list[i].wind.day
                                    
                                }
                            // console.log(weather);
                        }
                    }


                )




                // $(function(city) {
                //     $(".forecast-container > div").remove();
                //     $ajax({
                //         success: function (result) {
                //             $.each(result, function (type, button) {
                //                 var dateId = [i = 1].cityAndDate;
                //                 // var tempId = 
                //                 var tempId = (dateId++).temp;
                //                 console.log(tempId);
                //             }
                //             )
                //         }
                //     })
                // }
                
                
                










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
    // console.log("search btn clicked");

    var value = $("#city-name").val();
    currentWeather(value);

})