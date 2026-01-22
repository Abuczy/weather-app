import { useState, useEffect } from 'react';
import { fetchAllCitiesWeather } from '../api/weather';
import CityCard from '../components/CityCard/CityCard';
import './Home.css';

export function Home() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // pobierz dane z API przy załadowaniu
  useEffect(() => {
    const loadCities = async () => {
      try {
        setLoading(true);
        const data = await fetchAllCitiesWeather();
        setCities(data);
        setError(null);
      } catch (err) {
        setError('Failed to load weather data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadCities();
  }, []);
  
  // filtrowanie miast po nazwie
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  if (loading) {
    return (
      <div className="home-page">
        <div className="loading">Loading weather data...</div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="home-page">
        <div className="error">{error}</div>
      </div>
    );
  }
  
  return (
    <div className="home-page">
      <div className="page-header">
        <h1>Weather Forecast</h1>
        <p className="subtitle">Select a city to view detailed weather information</p>
      </div>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="cities-grid">
        {filteredCities.map((city) => (
          <CityCard 
            key={city.id} 
            city={city} 
          />
        ))}
        
        {filteredCities.length === 0 && (
          <p className="no-results">No city found "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}