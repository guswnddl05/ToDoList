const API_KEY = "07be4a19b96c6aaa42979bb00f1063a7";
const WEATHER_DATA_KEY = "weatherData";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => ({
      weather: `${data.weather[0].main} / ${data.main.temp}`,
      city: data.name,
    }))
    .then((weatherData) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:nth-child(2)");
      weather.innerText = weatherData.weather;
      city.innerText = weatherData.city;
      localStorage.setItem(WEATHER_DATA_KEY, JSON.stringify(weatherData));
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Please try again.");
    });
}

function onGeoError() {
  alert("Can't find your location. No weather data available.");
}

function getWeather() {
  const weatherDataString = localStorage.getItem(WEATHER_DATA_KEY);

  if (!weatherDataString) {
    navigator.geolocation.getCurrentPosition((position) => {
      onGeoOk(position);
    }, onGeoError);
  } else {
    const weatherData = JSON.parse(weatherDataString);
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:nth-child(2)");
    weather.innerText = weatherData.weather;
    city.innerText = weatherData.city;
  }
}

// 페이지 로드 시 한 번만 위치 정보 요청
window.addEventListener("load", getWeather);
