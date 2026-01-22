export const MOCK_CITIES = [
  {
    id: 1,
    name: 'London',
    country: 'GB',
    current: {
      temp: 12,
      feelsLike: 10,
      weather: 'Clouds',
      weatherDescription: 'Overcast clouds',
      icon: '04d',
      humidity: 78,
      pressure: 1013,
      windSpeed: 5.2,
      windDeg: 230,
      clouds: 90,
      rain: 0,
      rainChance: 15,
      rainType: 'none',
    },
    forecast: [
      { date: '2025-01-22', temp: 11, weather: 'Rain', icon: '10d', rain: 3.5, rainChance: 80, rainType: 'rain' },
      { date: '2025-01-23', temp: 9, weather: 'Clouds', icon: '04d', rain: 0, rainChance: 10, rainType: 'none' },
      { date: '2025-01-24', temp: 13, weather: 'Clear', icon: '01d', rain: 0, rainChance: 0, rainType: 'none' },
      { date: '2025-01-25', temp: 10, weather: 'Rain', icon: '10d', rain: 5.2, rainChance: 90, rainType: 'rain' },
      { date: '2025-01-26', temp: 8, weather: 'Clouds', icon: '03d', rain: 0, rainChance: 20, rainType: 'none' },
    ]
  },
  {
    id: 2,
    name: 'Manchester',
    country: 'GB',
    current: {
      temp: 8,
      feelsLike: 5,
      weather: 'Rain',
      weatherDescription: 'Light rain',
      icon: '10d',
      humidity: 85,
      pressure: 1008,
      windSpeed: 7.5,
      windDeg: 270,
      clouds: 100,
      rain: 2.3,
      rainChance: 85,
      rainType: 'rain',
    },
    forecast: [
      { date: '2025-01-22', temp: 7, weather: 'Rain', icon: '10d', rain: 4.1, rainChance: 95, rainType: 'rain' },
      { date: '2025-01-23', temp: 9, weather: 'Clouds', icon: '04d', rain: 1.0, rainChance: 40, rainType: 'rain' },
      { date: '2025-01-24', temp: 11, weather: 'Clouds', icon: '03d', rain: 0, rainChance: 10, rainType: 'none' },
      { date: '2025-01-25', temp: 8, weather: 'Rain', icon: '10d', rain: 3.8, rainChance: 75, rainType: 'rain' },
      { date: '2025-01-26', temp: 6, weather: 'Rain', icon: '09d', rain: 6.2, rainChance: 100, rainType: 'rain' },
    ]
  },
  {
    id: 3,
    name: 'Birmingham',
    country: 'GB',
    current: {
      temp: 10,
      feelsLike: 8,
      weather: 'Clouds',
      weatherDescription: 'Broken clouds',
      icon: '04d',
      humidity: 72,
      pressure: 1012,
      windSpeed: 4.1,
      windDeg: 180,
      clouds: 75,
      rain: 0,
      rainChance: 25,
      rainType: 'none',
    },
    forecast: [
      { date: '2025-01-22', temp: 11, weather: 'Clouds', icon: '03d', rain: 0, rainChance: 5, rainType: 'none' },
      { date: '2025-01-23', temp: 12, weather: 'Clear', icon: '01d', rain: 0, rainChance: 0, rainType: 'none' },
      { date: '2025-01-24', temp: 14, weather: 'Clear', icon: '01d', rain: 0, rainChance: 0, rainType: 'none' },
      { date: '2025-01-25', temp: 10, weather: 'Clouds', icon: '04d', rain: 0, rainChance: 15, rainType: 'none' },
      { date: '2025-01-26', temp: 9, weather: 'Rain', icon: '10d', rain: 2.5, rainChance: 70, rainType: 'rain' },
    ]
  },
  {
    id: 4,
    name: 'Liverpool',
    country: 'GB',
    current: {
      temp: 9,
      feelsLike: 6,
      weather: 'Clear',
      weatherDescription: 'Clear sky',
      icon: '01d',
      humidity: 65,
      pressure: 1015,
      windSpeed: 3.5,
      windDeg: 90,
      clouds: 10,
      rain: 0,
      rainChance: 5,
      rainType: 'none',
    },
    forecast: [
      { date: '2025-01-22', temp: 10, weather: 'Clear', icon: '01d', rain: 0, rainChance: 0, rainType: 'none' },
      { date: '2025-01-23', temp: 11, weather: 'Clouds', icon: '02d', rain: 0, rainChance: 10, rainType: 'none' },
      { date: '2025-01-24', temp: 12, weather: 'Clouds', icon: '03d', rain: 0, rainChance: 20, rainType: 'none' },
      { date: '2025-01-25', temp: 9, weather: 'Rain', icon: '10d', rain: 1.5, rainChance: 60, rainType: 'rain' },
      { date: '2025-01-26', temp: 8, weather: 'Clouds', icon: '04d', rain: 0, rainChance: 15, rainType: 'none' },
    ]
  },
  {
    id: 5,
    name: 'Edinburgh',
    country: 'GB',
    current: {
      temp: 5,
      feelsLike: 2,
      weather: 'Snow',
      weatherDescription: 'Light snow',
      icon: '13d',
      humidity: 88,
      pressure: 1005,
      windSpeed: 8.2,
      windDeg: 350,
      clouds: 100,
      rain: 0,
      rainChance: 70,
      rainType: 'snow',
    },
    forecast: [
      { date: '2025-01-22', temp: 4, weather: 'Snow', icon: '13d', rain: 0, rainChance: 80, rainType: 'snow' },
      { date: '2025-01-23', temp: 3, weather: 'Clouds', icon: '04d', rain: 0, rainChance: 30, rainType: 'none' },
      { date: '2025-01-24', temp: 6, weather: 'Clouds', icon: '03d', rain: 0, rainChance: 10, rainType: 'none' },
      { date: '2025-01-25', temp: 7, weather: 'Rain', icon: '10d', rain: 2.0, rainChance: 65, rainType: 'rain' },
      { date: '2025-01-26', temp: 5, weather: 'Clouds', icon: '04d', rain: 0, rainChance: 20, rainType: 'none' },
    ]
  },
  {
    id: 6,
    name: 'Bristol',
    country: 'GB',
    current: {
      temp: 13,
      feelsLike: 12,
      weather: 'Clear',
      weatherDescription: 'Few clouds',
      icon: '02d',
      humidity: 60,
      pressure: 1018,
      windSpeed: 2.8,
      windDeg: 120,
      clouds: 20,
      rain: 0,
      rainChance: 5,
      rainType: 'none',
    },
    forecast: [
      { date: '2025-01-22', temp: 14, weather: 'Clear', icon: '01d', rain: 0, rainChance: 0, rainType: 'none' },
      { date: '2025-01-23', temp: 15, weather: 'Clear', icon: '01d', rain: 0, rainChance: 0, rainType: 'none' },
      { date: '2025-01-24', temp: 13, weather: 'Clouds', icon: '02d', rain: 0, rainChance: 10, rainType: 'none' },
      { date: '2025-01-25', temp: 11, weather: 'Clouds', icon: '03d', rain: 0, rainChance: 25, rainType: 'none' },
      { date: '2025-01-26', temp: 12, weather: 'Rain', icon: '10d', rain: 1.2, rainChance: 55, rainType: 'rain' },
    ]
  },
];

export const getCityById = (id) => {
  return MOCK_CITIES.find(city => city.id === id);
};

export const getCityByName = (name) => {
  return MOCK_CITIES.find(
    city => city.name.toLowerCase() === name.toLowerCase()
  );
};