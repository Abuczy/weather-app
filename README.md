# Weather App 🌤️

A React-based weather application that displays real-time weather data for UK cities using the OpenWeatherMap API.

## Features

- **Real-time weather data** - Current temperature, conditions, and 5-day forecast
- **Multiple cities** - View weather for 6 UK cities (London, Manchester, Birmingham, Liverpool, Edinburgh, Bristol)
- **Temperature units** - Switch between Celsius, Fahrenheit, and Kelvin
- **Favourites** - Mark cities as favourites and view them on a dedicated page
- **Search** - Filter cities by name
- **Persistent settings** - Temperature units and favourites are saved in localStorage

## Screenshots

### Home Page
- Displays all cities with current weather
- Search bar for filtering
- Star icon to add/remove favourites

### City Details
- Current temperature and conditions
- Precipitation, wind, and cloud cover details
- 5-day weather forecast

### Favourites Page
- Shows only starred cities
- Quick access from header

## Technologies Used

| Technology | Purpose |
|------------|---------|
| React 18 | Frontend framework |
| React Router 6 | Page navigation |
| Redux Toolkit | Global state management |
| Axios | HTTP client for API requests |
| OpenWeatherMap API | Real-time weather data |
| CSS | Styling |

## Project Structure

```
src/
├── api/
│   └── weather.js          # API integration with OpenWeatherMap
├── components/
│   └── CityCard/
│       ├── CityCard.jsx    # Reusable city card component
│       └── CityCard.css
├── pages/
│   ├── Home.jsx            # Main page with city list
│   ├── Home.css
│   ├── Details.jsx         # City weather details
│   ├── Details.css
│   ├── Favorites.jsx       # Favourite cities page
│   └── Favorites.css
├── slices/
│   └── weatherSlice.js     # Redux slice for state management
├── constants/
│   └── temperatureUnits.js # Temperature unit constants
├── App.jsx                 # Main app with routing
├── App.css
├── store.js                # Redux store configuration
├── index.jsx               # Entry point
└── index.css               # Global styles
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## API Configuration

The app uses OpenWeatherMap API. The API key is already configured in `src/api/weather.js`.

To use your own API key:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your API key from your account
3. Replace the `API_KEY` in `src/api/weather.js`

```javascript
const API_KEY = 'your-api-key-here';
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## React Hooks Used

| Hook | Usage |
|------|-------|
| useState | Managing local component state (cities, loading, errors, search query) |
| useEffect | Fetching data from API, scrolling to top |
| useCallback | Memoizing functions (temperature conversion, weather icons) |
| useMemo | Memoizing processed forecast data |
| useSelector | Reading from Redux store |
| useDispatch | Dispatching Redux actions |
| useNavigate | Programmatic navigation |
| useSearchParams | Reading URL parameters |


## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Author

Weather App - Frontend Programming Course Project

## License

This project is for educational purposes.