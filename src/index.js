import './main.scss';
import { getCurrentWeather } from './data/data';

let weatherCache;

const form = document.querySelector('.search');
const input = document.querySelector('#search-bar');
const submitBtn = document.querySelector('.search button');
const errorMsg = document.querySelector('.search p');

const resultsContainer = document.querySelector('.results');
const name = resultsContainer.querySelector('.name');
const region = resultsContainer.querySelector('.region');
const country = resultsContainer.querySelector('.country');
const img = resultsContainer.querySelector('.current-left img');
const temperature = resultsContainer.querySelector('.temperature');
const fahrenheit = document.querySelector('.fahrenheit');
const celcius = document.querySelector('.celcius');
const humidity = resultsContainer.querySelector('.humidity span');
const feelsLike = resultsContainer.querySelector('.feels-like span');
const windValue = resultsContainer.querySelector('.wind-value');
const windUnits = resultsContainer.querySelector('.wind-units');
const dayTime = resultsContainer.querySelector('.day-time');
const description = resultsContainer.querySelector('.description');
const forecast = resultsContainer.querySelector('.forecast');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorMsg.innerHTML = '';
  input.disabled = true;
  submitBtn.disabled = true;

  weatherCache = await getCurrentWeather(input.value);

  if (weatherCache.current) {
    resultsContainer.style.display = 'block';
    buildCurrent();
    buildForecast();
  } else {
    errorMsg.innerHTML = weatherCache.error;
  }

  input.disabled = false;
  submitBtn.disabled = false;
});

function buildCurrent() {
  name.innerHTML = weatherCache.current.name;
  region.innerHTML = weatherCache.current.region
    ? `${weatherCache.current.region},`
    : '';
  country.innerHTML = weatherCache.current.country;
  img.src = weatherCache.current.img;
  temperature.innerHTML = fahrenheit.disabled
    ? weatherCache.current.temperature.f
    : weatherCache.current.temperature.c;
  humidity.innerHTML = weatherCache.current.humidity;
  feelsLike.innerHTML = fahrenheit.disabled
    ? weatherCache.current.feelsLike.f
    : weatherCache.current.feelsLike.c;
  windValue.innerHTML = fahrenheit.disabled
    ? weatherCache.current.wind.mph
    : weatherCache.current.wind.kph;
  windUnits.innerHTML = fahrenheit.disabled ? 'mph' : 'kph';
  dayTime.innerHTML = weatherCache.current.dayTime;
  description.innerHTML = weatherCache.current.description;
}

function buildForecast() {
  forecast.innerHTML = '';
  weatherCache.forecast.forEach((day) => {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('forecast-day');
    dayDiv.innerHTML = /* html */ `
      <p class="forecast-day-label">${day.day}</p>
      <img src=${day.img} />
      <div>
        <p class="forecast-high"><span>${
          fahrenheit.disabled ? day.maxtemp_f : day.maxtemp_c
        }</span>°</p>
        <p class="forecast-low"><span>${
          fahrenheit.disabled ? day.mintemp_f : day.mintemp_c
        }</span>°</p>
      </div>
    `;
    forecast.appendChild(dayDiv);
  });
}

fahrenheit.addEventListener('click', () => {
  fahrenheit.disabled = true;
  celcius.disabled = false;
  temperature.innerHTML = weatherCache.current.temperature.f;
  feelsLike.innerHTML = weatherCache.current.feelsLike.f;
  windValue.innerHTML = weatherCache.current.wind.mph;
  windUnits.innerHTML = 'mph';

  const forecastDays = document.querySelectorAll('.forecast-day');
  forecastDays.forEach((day) => {
    const dayName = day.querySelector('.forecast-day-label').innerHTML;
    const dayHigh = day.querySelector('.forecast-high span');
    const dayLow = day.querySelector('.forecast-low span');
    const dayWeather = weatherCache.forecast.find(
      (cacheDay) => cacheDay.day === dayName
    );
    dayHigh.innerHTML = dayWeather.maxtemp_f;
    dayLow.innerHTML = dayWeather.mintemp_f;
  });
});

celcius.addEventListener('click', () => {
  celcius.disabled = true;
  fahrenheit.disabled = false;
  temperature.innerHTML = weatherCache.current.temperature.c;
  feelsLike.innerHTML = weatherCache.current.feelsLike.c;
  windValue.innerHTML = weatherCache.current.wind.kph;
  windUnits.innerHTML = 'kph';

  const forecastDays = document.querySelectorAll('.forecast-day');
  forecastDays.forEach((day) => {
    const dayName = day.querySelector('.forecast-day-label').innerHTML;
    const dayHigh = day.querySelector('.forecast-high span');
    const dayLow = day.querySelector('.forecast-low span');
    const dayWeather = weatherCache.forecast.find(
      (cacheDay) => cacheDay.day === dayName
    );
    dayHigh.innerHTML = dayWeather.maxtemp_c;
    dayLow.innerHTML = dayWeather.mintemp_c;
  });
});

const holder = input.value;
input.value = '';
input.focus();
input.value = holder;
