import * as dayjs from 'dayjs';

export async function getCurrentWeather(locationString) {
  try {
    const baseUrl = 'https://api.weatherapi.com/v1/forecast.json';
    const encodedLocation = encodeURIComponent(locationString);
    const days = 3;
    const key = '973488068c634787b66233221240801';
    const url = `${baseUrl}?q=${encodedLocation}&key=${key}&days=${days}`;
    const response = await fetch(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
    });

    if (response.ok) {
      const json = await response.json();
      const current = buildCurrentData(json);
      const forecast = buildForecastData(json);
      return { current, forecast, error: '' };
    } else {
      return {
        current: undefined,
        forecast: undefined,
        error: 'No matching location found.',
      };
    }
  } catch (e) {
    console.log(`Something went wrong 😭: ${e}`);
  }
}

function buildCurrentData(json) {
  return {
    name: json.location.name,
    region: json.location.region,
    country: json.location.country,
    img: `https:${json.current.condition.icon}`,
    temperature: {
      f: Math.round(json.current.temp_f),
      c: Math.round(json.current.temp_c),
    },
    humidity: json.current.humidity,
    feelsLike: {
      f: Math.round(json.current.feelslike_f),
      c: Math.round(json.current.feelslike_c),
    },
    wind: {
      mph: Math.round(json.current.wind_mph),
      kph: Math.round(json.current.wind_kph),
    },
    dayTime: dayjs(json.current.last_updated_epoch * 1000).format(
      'dddd h:mm A'
    ),
    description: json.current.condition.text,
  };
}

function buildForecastData(json) {
  return json.forecast.forecastday.map((day) => {
    return {
      day: dayjs(day.date_epoch * 1000).format('dddd'),
      maxtemp_c: Math.round(day.day.maxtemp_c),
      maxtemp_f: Math.round(day.day.maxtemp_f),
      mintemp_c: Math.round(day.day.mintemp_c),
      mintemp_f: Math.round(day.day.mintemp_f),
      img: `https:${day.day.condition.icon}`,
      description: day.day.condition.text,
    };
  });
}
