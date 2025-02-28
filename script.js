const apikey = "74a73a49757e90b23ffc036ef2d730e1";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const temp = document.querySelector("#temp");
const country = document.querySelector("#city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchtext = document.querySelector("#search input");
const searchbtn = document.querySelector("#search button");
const weatherIcon = document.querySelector("#weather_icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  temp.innerHTML = Math.round(data.main.temp) + "°C";
  country.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main == "drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "mist") {
    weatherIcon.src = "images/mist.png";
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchtext.value);
});
