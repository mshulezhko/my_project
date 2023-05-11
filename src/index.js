let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
let today = new Date();
let currentDate = document.querySelector('#current_date')
currentDate.innerHTML = `${dayList[today.getDay()]} ${today.getHours()}:${today.getMinutes()}`

let submit = document.querySelector('#submit')

let apiKey = "8c878230da10ecee80473fe52a3e33b4";

function showSearchCity() {
    let cityName = document.querySelector('#city')
    let currentCity = document.querySelector('#current_city')
    if (cityName.value.length > 0) {
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`
        currentCity.innerHTML = cityName.value
        cityName.value = ''

        console.log(apiUrl);
        axios.get(apiUrl).then(temperature);
    }
}

submit.addEventListener('click', showSearchCity)


let celsiusFahrenheit = document.querySelector('#celsius-fahrenheit')
celsiusFahrenheit.addEventListener('click', showTemperature)

let signTemp = document.querySelector('#sign')
let temp = document.querySelector('#temp')

function showTemperature() {
    if (celsiusFahrenheit.innerHTML === '°C') {
        celsiusFahrenheit.innerHTML = '°F'
        temp.innerHTML = 11
        signTemp.innerHTML = '°C'
    } else {
        celsiusFahrenheit.innerHTML = '°C'
        temp.innerHTML = (11 * 9 / 5) + 32
        signTemp.innerHTML = '°F'
    }
}


function showCoords(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(temperature);
}

function temperature(response) {
    let temp = response.data.main.temp;
    let titleTemp = document.querySelector("#temp");
    let cityName = document.querySelector("#current_city");
    let city = response.data.name
    titleTemp.innerHTML = Math.round(temp)
    cityName.innerHTML = city
}

function showCurrentCityTemperature() {
    navigator.geolocation.getCurrentPosition(showCoords);
}


let submitCurrentTemperature = document.querySelector('#submitCurrent')
submitCurrentTemperature.addEventListener('click', showCurrentCityTemperature)





