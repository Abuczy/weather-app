import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Favorites } from './pages/Favorites';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './store';
import { setTemperatureUnits } from './slices/weatherSlice';

import './App.css';

// komponent przełącznika jednostek
function TemperatureToggle() {
  const dispatch = useDispatch();
  const currentUnit = useSelector((state) => state.weather.temperatureUnits);
  
  const units = ['C', 'F', 'K'];
  
  return (
    <div className="temp-toggle">
      {units.map((unit) => (
        <button
          key={unit}
          className={`temp-btn ${currentUnit === unit ? 'active' : ''}`}
          onClick={() => dispatch(setTemperatureUnits(unit))}
        >
          °{unit}
        </button>
      ))}
    </div>
  );
}

// musi być WEWNĄTRZ Provider żeby miał dostęp do Redux
function AppContent() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <div className="header-left">
            <Link to="/" className="app-title">Weather App</Link>
            <Link to="/favorites" className="favorites-link">⭐ Favourites</Link>
          </div>
          <TemperatureToggle />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;