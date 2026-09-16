# Weather App

A lightweight, fully client-side **weather web app** — current conditions, 5-day forecast and weather tips — built with HTML, CSS and vanilla JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Features

- 🌡 **Current conditions** — temperature, feels like, humidity, wind, weather icon
- 📅 **5-day forecast** — `forecast.html`
- 🧭 **Weather info & tips** — `tips.html`
- 📖 **About page** — `about.html`
- ⌨️ **Live search** — press `Enter` to look up any city

## Run it

Just open `index.html` in a browser — no build step, no server needed.

```bash
# or serve locally
python -m http.server 8080
# visit http://localhost:8080
```

## API key

The app uses the [OpenWeatherMap](https://openweathermap.org/api) API.

1. Get a free key at `https://home.openweathermap.org/api_keys`
2. Open `main.js` and replace the placeholder:

```js
const apikey = "YOUR_OPENWEATHERMAP_API_KEY";
```

> Keep your key private — never share or commit it.

## Structure

```
index.html      # main weather dashboard
forecast.html   # 5-day forecast
tips.html       # weather tips
about.html      # about page
main.js         # API calls & UI logic
*.png           # weather/UI icons
```

## License

MIT © 2026 Lalit Kumar