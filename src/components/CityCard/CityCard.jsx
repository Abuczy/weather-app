/**
 * CityCard Component
 * 
 * Wyświetla kartę z podstawowymi info o mieście:
 * - Nazwa miasta
 * - Aktualna temperatura
 * - Ikona pogody
 * - Opis pogody
 * - Gwiazdka (ulubione)
 * 
 * Po kliknięciu → przekierowanie do szczegółów
 */

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../../slices/weatherSlice';
import './CityCard.css';

function CityCard({ city }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // jednostki temperatury z Redux
  const temperatureUnit = useSelector((state) => state.weather.temperatureUnits);
  
  // sprawdź czy miasto jest w ulubionych
  const favorites = useSelector((state) => state.weather.favorites);
  const isFavorite = favorites.includes(city.id);
  
  // konwersja temperatury
  const convertTemperature = (tempCelsius) => {
    switch(temperatureUnit) {
      case 'F':
        return Math.round((tempCelsius * 9/5) + 32);
      case 'K':
        return Math.round(tempCelsius + 273.15);
      case 'C':
      default:
        return Math.round(tempCelsius);
    }
  };
  
  // ikona pogody
  const getWeatherIcon = (weatherType) => {
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
  };
  
  // kliknięcie w kartę - przejdź do szczegółów (przekaż id i nazwę miasta)
  const handleClick = () => {
    navigate(`/details?city=${city.id}&name=${city.name}`);
  };
  
  // kliknięcie w gwiazdkę - dodaj/usuń z ulubionych
  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // nie otwieraj szczegółów
    dispatch(toggleFavorite(city.id));
  };
  
  return (
    <div className="city-card" onClick={handleClick}>
      {/* nagłówek z nazwą i gwiazdką */}
      <div className="city-card-header">
        <h3>{city.name}</h3>
        <div className="header-right">
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? '★' : '☆'}
          </button>
          <span className="country-code">{city.country}</span>
        </div>
      </div>
      
      {/* ikona pogody */}
      <div className="weather-icon-large">
        {getWeatherIcon(city.current.weather)}
      </div>
      
      {/* temperatura */}
      <div className="temperature-main">
        {convertTemperature(city.current.temp)}°{temperatureUnit}
      </div>
      
      {/* opis pogody */}
      <div className="weather-description">
        {city.current.weatherDescription}
      </div>
      
      {/* feels like */}
      <div className="feels-like">
        Feels like: {convertTemperature(city.current.feelsLike)}°{temperatureUnit}
      </div>
    </div>
  );
}

export default CityCard;