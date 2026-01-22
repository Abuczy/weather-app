import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MOCK_CITIES } from '../constants/cities';
import CityCard from '../components/CityCard/CityCard';
import './Favorites.css';

export function Favorites() {
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.weather.favorites);
  
  const favoriteCities = MOCK_CITIES.filter((city) => 
    favorites.includes(city.id)
  );
  
  return (
    <div className="favorites-page">
      <button onClick={() => navigate('/')} className="back-button">← Back to list</button>
      
      <div className="page-header">
        <h1>Favourite cities</h1>
        <p className="subtitle">Your saved locations</p>
      </div>
      
      {favoriteCities.length > 0 ? (
        <div className="cities-grid">
          {favoriteCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      ) : (
        <div className="no-favorites">
          <p>Nie masz jeszcze ulubionych miast</p>
          <p>Click ☆ on a city to add to favourites</p>
          <Link to="/" className="back-link">← Back to city list</Link>
        </div>
      )}
    </div>
  );
}