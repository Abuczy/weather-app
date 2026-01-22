import axios from 'axios';

const API_KEY = '9acddbdc00484aefc6ad27adb03b2951';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// lista miast do pobrania
const CITIES = [
  { name: 'London', country: 'GB' },
  { name: 'Manchester', country: 'GB' },
  { name: 'Birmingham', country: 'GB' },
  { name: 'Liverpool', country: 'GB' },
  { name: 'Edinburgh', country: 'GB' },
  { name: 'Bristol', country: 'GB' },
];

// pobierz aktualną pogodę dla miasta
export const fetchCurrentWeather = async (cityName) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
  params: {
    q: `${cityName},GB`,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};

// pobierz prognozę 5-dniową dla miasta
export const fetchForecast = async (cityName) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
  params: {
    q: `${cityName},GB`,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};

// pobierz dane dla wszystkich miast
export const fetchAllCitiesWeather = async () => {
  const citiesData = await Promise.all(
    CITIES.map(async (city, index) => {
      const current = await fetchCurrentWeather(city.name);
      const forecast = await fetchForecast(city.name);
      
      // przetwórz prognozę - weź 1 wpis na dzień (co 8 rekordów = 24h)
      const dailyForecast = forecast.list
        .filter((_, i) => i % 8 === 0)
        .slice(0, 5)
        .map((item) => ({
          date: item.dt_txt.split(' ')[0],
          temp: item.main.temp,
          weather: item.weather[0].main,
          icon: item.weather[0].icon,
          rain: item.rain?.['3h'] || 0,
          rainChance: Math.round((item.pop || 0) * 100),
          rainType: item.rain ? 'rain' : item.snow ? 'snow' : 'none',
        }));
      
      return {
        id: index + 1,
        name: current.name,
        country: current.sys.country,
        current: {
          temp: current.main.temp,
          feelsLike: current.main.feels_like,
          weather: current.weather[0].main,
          weatherDescription: current.weather[0].description,
          icon: current.weather[0].icon,
          humidity: current.main.humidity,
          pressure: current.main.pressure,
          windSpeed: current.wind.speed,
          windDeg: current.wind.deg,
          clouds: current.clouds.all,
          rain: current.rain?.['1h'] || 0,
          rainChance: Math.round((forecast.list[0]?.pop || 0) * 100),
          rainType: current.rain ? 'rain' : current.snow ? 'snow' : 'none',
        },
        forecast: dailyForecast,
      };
    })
  );
  
  return citiesData;
};