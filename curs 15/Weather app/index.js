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

  const map = document.querySelector(".map");

  map.innerHTML = `<iframe
  width="500"
  height="250"
  style="border:0"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2DEdqX1gCq7yUiq_kfO6QACCBY0eg-U8
    &q=${cityNameInput}">
</iframe>`;
}

async function showForecast() {
  let cityNameInput = document.querySelector("[name='city']").value;
  cityNameInput = cityNameInput.toLowerCase();

  const response = await fetch(URL_FORECAST_WEATHER + cityNameInput);
  weatherData = await response.json();

  let forcastInfoText = document.querySelector(".forcastInfo");
  let str = `<th>Ziua:${weatherData.list[0].dt_txt.substring(0, 10)}</th>`;
  let str1 = "";
  let str2 = "";
  let dayString = weatherData.list[0].dt_txt.substring(0, 10);

  for (let article of weatherData.list) {
    if (article === null) {
      continue;
    }

    if (dayString === article.dt_txt.substring(0, 10)) {
      str1 += `
        <div>${article.dt_txt.substring(10, 16)}</div>
        <div>
          <img src="http://openweathermap.org/img/w/${
            article.weather[0].icon
          }.png" alt="" />
        </div>
        <div class="forcastTemp">${article.main.temp} &#176;C</div>
`;
    }

    if (dayString !== article.dt_txt.substring(0, 10)) {
      str += `<th>Ziua:${article.dt_txt.substring(0, 10)}</th>`;
      dayString = article.dt_txt.substring(0, 10);
      str2 += `    <td>
      ${str1}
    </td>`;
      str1 = "";
    }
  }
  str2 += `    <td>
  ${str1}
</td>`;
  forcastInfoText.innerHTML = `            
  <thead>
    <tr>
      ${str}
    </tr>
  </thead>
  <tr>
  ${str2}
</tr>
`;
}
