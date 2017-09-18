import axios from 'axios';

const OWM_KEY = 'b3523dbbe316d2bfe8231f194854afc6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OWM_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country = 'us') {
  const url = encodeURI(`${ROOT_URL}&q=${city},${country}`); // country code is static for now
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    // return the promise as payload
    payload: request
  };
}
