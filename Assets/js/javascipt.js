var searchBtn = document.getElementById('search');
// var fetchButton = document.getElementById('fetch-button');

var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));



// function searchCity(value) {
//     // searchCity.value.trim();
//     console.log(searchCity);

var apiKey = "f3e06e3f6da3749bb7e73025459954e1";
function searchCity(searchValue) {
    console.log(searchValue);
    // console.log(searchValue, “in search city”);


    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + apiKey + "&units=imperial";

    console.log(apiUrl);
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                //         displayWeather(data.items, city-name);
                console.log(data);
            });
        }

        var savedName = $("#saved-city-name").addClass("cardTitle").text(data.name);
        // var savedTemp = $("#temp").addClass("cardTitle").text(data.name);
        var savedTemp.attr("src", iconUrl + data.weather[0].icon + "@2x.png");
        var savedWind = $("#wind").addClass("cardTitle").text(data.name);
        var savedHumidity = $("#humidity").addClass("cardTitle").text(data.name);

        var card1 = $(".card").val()

        $("#search").on("click", function (e) {
            e.preventDefault();
            console.log(heeeeyyyyyyyyyy)
            // var value = $("#city-name").val()
        
            console.log(searchValue);
            searchCity(searchValue);
        });
    })

}

// var createTableCol = document.createElement('tr');
// var tableData = document.createElement('td');
// // var link = document.createElement('a');
// // Setting the text of link and the href of the link
// // link.textContent = data[i].html_url;
// // link.href = data[i].html_url;
// // Appending the link to the tabledata and then appending the tabledata to the tablerow
// // The tablerow then gets appended to the tablebody
// // tableData.appendChild(link);
// createTableRow.appendChild(tableData);
// tableBody.appendChild(createTableCol);

//             aria-label="Toggle navigation">
//               <span class="navbar-toggler-icon"></span>
//             </button>


// function saveCity() {

// }




// function displayWeatherCity() {

// }


// function getApi() {
//     var requestUrl = 'https://home.openweathermap.org/api_keys=f3e06e3f6da3749bb7e73025459954e1';
//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)

//             getApi();

// var weatherButtonEl = document.querySelector('#weather-btn');
// var cityName = nameInputEl.value.trim();
// if (cityName) {
//     getCurrentWeather(cityName);
//     containerEl.textContent = '';
// } else {
//     alert('Please enter a city name');
// };












// var buttonClickHandler = function (event) {
// var weather = event.target.getAttribute('data-weather');
// if (weather) {
//         getCurrentWeather(weather);
//         weatherContainerEl.textContent = '';
// }
// };




// var getCurrentWeather = function (city) {
//     var apiUrl = 'https://home.openweathermap.org/api_keys=f3e06e3f6da3749bb7e73025459954e1' + city + '/weather';
//     fetch(apiUrl)
//         .then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (data) {
//                     displayWeatherWeather(data, city);
//                 });
//             } else {
//                 alert('Error: ' + response.statusText);   //  need? //
//             }
//         })
//         .catch(function (error) {
//             alert('Unable to connect to Weather Map');
//         });
// };
// cityFormEl.addEventListener('submit', formSubmitHandler);
// weatherButtonsEl.addEventListener('click', buttonClickHandler);





// uv search long and lag in overstack

// add 1+ to moment()
// temp is in calvin
// (last) icon - list link to icon syntax
// //clear form lesson 5-5 js



//search for city
//presented with current conditions for that city
//presented with future conditions for that city
//searched cities added to search hx
//presented in main with city name, date, current weather conditions, icon, temp,humidity, wind, UV
//UV index color coded favorable, moderate, or severe
//five day forecast for searched city displayWeathering date, icon, temp,humidity, wind
//clicking on a city in search hx will bring up its current and future conditions


