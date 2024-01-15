import * as dayjs from 'dayjs';

export async function getCurrentWeather(locationString) {
  try {
    const baseUrl = 'https://api.weatherapi.com/v1/current.json';
    const encodedLocation = encodeURIComponent(locationString);
    const key = '973488068c634787b66233221240801';
    const url = `${baseUrl}?q=${encodedLocation}&key=${key}`;
    const response = await fetch(url, { mode: 'cors' });
    if (response.ok) {
      const json = await response.json();
      const weather = {};
      weather.name = json.location.name;
      weather.region = json.location.region;
      weather.country = json.location.country;
      weather.img = `https:${json.current.condition.icon}`;
      weather.temperature = {
        f: Math.round(json.current.temp_f),
        c: Math.round(json.current.temp_c),
      };
      weather.humidity = json.current.humidity;
      weather.feelsLike = {
        f: Math.round(json.current.feelslike_f),
        c: Math.round(json.current.feelslike_c),
      };
      weather.wind = {
        mph: Math.round(json.current.wind_mph),
        kph: Math.round(json.current.wind_kph),
      };
      const timeNum = Number(`${json.current.last_updated_epoch}000`);
      weather.dayTime = dayjs(timeNum).format('dddd h:mm A');
      weather.description = json.current.condition.text;

      return weather;
    }
  } catch (e) {
    console.log(e);
  }
}
