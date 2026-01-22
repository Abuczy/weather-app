import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { fetchCurrentWeather, fetchForecast } from '../api/weather';
import './Details.css';

export function Details() {
  // pobierz parametry z URL (?city=1&name=London)
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const cityId = Number(searchParams.get('city'));
  const cityName = searchParams.get('name');
  
  // stan komponentu - dane miasta, loading, błędy
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // jednostka temperatury z Redux
  const temperatureUnit = useSelector((state) => state.weather.temperatureUnits);
  
  // useMemo - zapamiętaj przetworzone dane prognozy (optymalizacja)
  const processedForecast = useMemo(() => {
    if (!city) return [];
    return city.forecast;
  }, [city]);
  
  // pobierz dane z API gdy komponent się załaduje lub zmieni się miasto
  useEffect(() => {
    const loadCityData = async () => {
      // brak nazwy miasta - błąd
      if (!cityName) {
        setError('City not found');
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        
        // pobierz aktualną pogodę i prognozę z API
        const current = await fetchCurrentWeather(cityName);
        const forecast = await fetchForecast(cityName);
        
        // przetwórz prognozę - weź 1 wpis na dzień (API zwraca co 3h)
        const dailyForecast = forecast.list
          .filter((_, i) => i % 8 === 0) // co 8 rekordów = 24h
          .slice(0, 5) // tylko 5 dni
          .map((item) => ({
            date: item.dt_txt.split(' ')[0],
            temp: item.main.temp,
            weather: item.weather[0].main,
            icon: item.weather[0].icon,
            rain: item.rain?.['3h'] || 0,
            rainChance: Math.round((item.pop || 0) * 100),
            rainType: item.rain ? 'rain' : item.snow ? 'snow' : 'none',
          }));
        
        // ustaw dane miasta w stanie
        setCity({
          id: cityId,
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
        });
        setError(null);
      } catch (err) {
        setError('Failed to load city data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadCityData();
    window.scrollTo(0, 0); // scroll na górę strony
  }, [cityName, cityId]);
  
  // konwersja temperatury na wybraną jednostkę (C/F/K)
  const convertTemperature = useCallback((tempCelsius) => {
    switch (temperatureUnit) {
      case 'F':
        return Math.round((tempCelsius * 9/5) + 32);
      case 'K':
        return Math.round(tempCelsius + 273.15);
      case 'C':
      default:
        return Math.round(tempCelsius);
    }
  }, [temperatureUnit]);
  
  // mapowanie typu pogody na emoji
  const getWeatherIcon = useCallback((weatherType) => {
    const icons = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Snow': '❄️',
      'Drizzle': '🌦️',
      'Thunderstorm': '⛈️',
      'Mist': '🌫️',
      'Fog': '🌫️',
    };
    return icons[weatherType] || '🌤️';
  }, []);
  
  // konwersja stopni na kierunek wiatru (N/NE/E/SE/S/SW/W/NW)
  const getWindDirection = useCallback((degrees) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  }, []);
  
  // etykieta rodzaju opadów
  const getRainTypeLabel = useCallback((rainType) => {
    const types = {
      'rain': 'Rain',
      'snow': 'Snow',
      'none': 'None',
    };
    return types[rainType] || 'None';
  }, []);
  
  // powrót do strony głównej
  const handleBack = useCallback(() => {
    navigate('/');
  }, [navigate]);
  
  // wyświetl loading podczas pobierania danych
  if (loading) {
    return (
      <div className="details-page">
        <div className="loading">Loading weather data...</div>
      </div>
    );
  }
  
  // wyświetl błąd jeśli nie udało się pobrać danych
  if (error || !city) {
    return (
      <div className="details-page">
        <div className="details-error">
          <h2>{error || 'City not found'}</h2>
          <button onClick={handleBack} className="back-button">
            ← Back to list
          </button>
        </div>
      </div>
    );
  }
  
  const { current } = city;
  
  return (
    <div className="details-page">
      {/* przycisk powrotu */}
      <button onClick={handleBack} className="back-button">
        ← Back to list
      </button>
      
      {/* nagłówek z nazwą miasta */}
      <div className="details-header">
        <h1>{city.name}</h1>
        <span className="country-badge">{city.country}</span>
      </div>
      
      {/* aktualna pogoda - duży kafelek */}
      <div className="current-weather">
        <div className="current-main">
          <span className="current-icon">{getWeatherIcon(current.weather)}</span>
          <span className="current-temp">
            {convertTemperature(current.temp)}°{temperatureUnit}
          </span>
        </div>
        <p className="current-description">{current.weatherDescription}</p>
        <p className="feels-like">
          Feels like: {convertTemperature(current.feelsLike)}°{temperatureUnit}
        </p>
      </div>
      
      {/* szczegóły: opady, wiatr, zachmurzenie */}
      <div className="weather-details">
        <div className="detail-card">
          <span className="detail-icon">💧</span>
          <span className="detail-label">Precipitation</span>
          <span className="detail-value">{current.rainChance}%</span>
          <span className="detail-extra">
            {getRainTypeLabel(current.rainType)} {current.rain > 0 ? `• ${current.rain} mm` : ''}
          </span>
        </div>
        
        <div className="detail-card">
          <span className="detail-icon">💨</span>
          <span className="detail-label">Wind</span>
          <span className="detail-value">{current.windSpeed} km/h</span>
          <span className="detail-extra">
            Direction: {getWindDirection(current.windDeg)}
          </span>
        </div>
        
        <div className="detail-card">
          <span className="detail-icon">☁️</span>
          <span className="detail-label">Cloud cover</span>
          <span className="detail-value">{current.clouds}%</span>
          <span className="detail-extra">
            Pressure: {current.pressure} hPa
          </span>
        </div>
      </div>
      
      {/* prognoza 5-dniowa - używamy processedForecast z useMemo */}
      <div className="forecast-section">
        <h2>5-day forecast</h2>
        <div className="forecast-grid">
          {processedForecast.map((day, index) => (
            <div key={index} className="forecast-card">
              <span className="forecast-date">
                {new Date(day.date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric' })}
              </span>
              <span className="forecast-icon">{getWeatherIcon(day.weather)}</span>
              <span className="forecast-temp">
                {convertTemperature(day.temp)}°{temperatureUnit}
              </span>
              <span className="forecast-rain">
                💧 {day.rainChance}%
              </span>
              <span className="forecast-rain-type">
                {day.rain > 0 ? `${day.rain} mm` : getRainTypeLabel(day.rainType)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}