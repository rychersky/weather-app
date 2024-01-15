import './main.scss';
import { getCurrentWeather } from './data/data';

let weather;

const form = document.querySelector('.search');
const input = document.querySelector('#search-bar');
const submit = document.querySelector('.search button');

const fahrenheit = document.querySelector('.fahrenheit');

const name = document.querySelector('.name');
const region = document.querySelector('.region');
const country = document.querySelector('.country');
const img = document.querySelector('.current-left img');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity span');
const feelsLike = document.querySelector('.feels-like span');
const wind = document.querySelector('.wind-value');
const dayTime = document.querySelector('.day-time');
const description = document.querySelector('.description');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  input.disabled = true;
  submit.disabled = true;

  const isFahrenheit = fahrenheit.disabled;
  weather = await getCurrentWeather(input.value);

  name.innerHTML = weather.name;
  region.innerHTML = weather.region;
  country.innerHTML = weather.country;
  img.src = weather.img;
  temperature.innerHTML = fahrenheit.disabled
    ? weather.temperature.c
    : weather.temperature.f;
  humidity.innerHTML = weather.humidity;
  feelsLike.innerHTML = fahrenheit.disabled
    ? weather.feelsLike.c
    : weather.feelsLike.f;
  wind.innerHTML = fahrenheit.disabled ? weather.wind.kph : weather.wind.mph;
  dayTime.innerHTML = weather.dayTime;
  description.innerHTML = weather.description;

  input.disabled = false;
  submit.disabled = false;
  console.log(weather);
});

const holder = input.value;
input.value = '';
input.focus();
input.value = holder;
