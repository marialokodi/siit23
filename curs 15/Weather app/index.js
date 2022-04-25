const URL_CURRENT_WEATHER =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
const URL_FORECAST_WEATHER =
  "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
const URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"; // sufix .png
let weatherData = {};

async function showWeather() {
  let cityNameInput = document.querySelector("[name='city']").value;
  cityNameInput = cityNameInput.toLowerCase();

  const response = await fetch(URL_CURRENT_WEATHER + cityNameInput);
  weatherData = await response.json();

  let weatherInfoText = document.querySelector(".weatherInfo");
  let str = "";

  str = `
    <div class="textData">
      <img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" alt="" />
      <div>Description: ${weatherData.weather[0].description}</div>
      <div>Humidity: ${weatherData.main.humidity}</div>
      <div>Pressure: ${weatherData.main.pressure}</div>
      <div>Current Temperature: ${weatherData.main.temp}</div>
      <div>Max: ${weatherData.main.temp_max}</div>
      <div>Min: ${weatherData.main.temp_min}</div>
    </div>
    <div class="map"></div>`;

  weatherInfoText.innerHTML = str;
}

async function showForecast() {
  let cityNameInput = document.querySelector("[name='city']").value;
  cityNameInput = cityNameInput.toLowerCase();

  const response = await fetch(URL_FORECAST_WEATHER + cityNameInput);
  weatherData = await response.json();

  let forcastInfoText = document.querySelector("tbody");
  let str = "";

  for (let [i, article] of Object.entries(weatherData.list)) {
    if (article === null) {
      continue;
    }

    str += `
    <tr>
    
    <div >
      <img src="http://openweathermap.org/img/w/${
        article.weather[0].icon
      }.png" alt="" />
      <div>Time: ${article.dt_txt.substring(10)}</div>
      <div>Temperature: ${article.main.temp}</div>
      <div>Description: ${article.weather[0].description}</div>
    </div>
    </tr>`;
  }
  forcastInfoText.innerHTML = str;
}
