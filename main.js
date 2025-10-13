const apikey = "eb48d33d0dad9dbd9fd9ea9476b67bb3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

// --- CURRENT WEATHER (index.html)
async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    return;
  }
  const data = await response.json();
  document.querySelector(".error").style.display = "none";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  const icon = document.querySelector(".weather-icon");
  switch (data.weather[0].main) {
    case "Clouds": icon.src = "clouds.png"; break;
    case "Clear": icon.src = "clear.png"; break;
    case "Rain": icon.src = "rain.png"; break;
    case "Drizzle": icon.src = "drizzle.png"; break;
    case "Mist": icon.src = "mist.png"; break;
    case "Snow": icon.src = "snow.png"; break;
  }
}

// --- FORECAST (forecast.html)
async function getForecast() {
  const city = document.getElementById("forecastCity").value.trim();
  if (!city) return;
  const res = await fetch(forecastURL + city + `&appid=${apikey}`);
  if (res.status === 404) {
    document.getElementById("forecastContainer").innerHTML = `<p style='color:#ff4b5c'>⚠️ City not found!</p>`;
    return;
  }
  const data = await res.json();
  const forecastContainer = document.getElementById("forecastContainer");
  forecastContainer.innerHTML = "";

  // Filter forecast data every 8th index = roughly 1 per day
  const daily = data.list.filter((item, index) => index % 8 === 0);

  daily.forEach(day => {
    const date = new Date(day.dt_txt);
    const options = { weekday: "long" };
    const dayName = date.toLocaleDateString("en-US", options);
    const icon = getIcon(day.weather[0].main);

    const div = document.createElement("div");
    div.className = "day";
    div.innerHTML = `
      <h3>${dayName}</h3>
      <img src="${icon}" alt="icon">
      <p>${Math.round(day.main.temp)}°C</p>
      <p>${day.weather[0].description}</p>
      <p>💧 ${day.main.humidity}%</p>
      <p>💨 ${day.wind.speed} km/h</p>
    `;
    forecastContainer.appendChild(div);
  });
}

// Helper for icons
function getIcon(main) {
  switch (main) {
    case "Clouds": return "clouds.png";
    case "Clear": return "clear.png";
    case "Rain": return "rain.png";
    case "Drizzle": return "drizzle.png";
    case "Mist": return "mist.png";
    case "Snow": return "snow.png";
    default: return "clear.png";
  }
}

// --- Event Listeners for index.html
if (document.querySelector(".search")) {
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");

  searchBtn.addEventListener("click", () => checkWeather(searchBox.value));
  searchBox.addEventListener("keypress", e => { if (e.key === "Enter") checkWeather(searchBox.value); });
}
