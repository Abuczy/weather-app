# Weather App

Simple weather app built with React

## What it does

- Shows current weather for 6 UK cities (London, Manchester, Birmingham, Liverpool, Edinburgh, Bristol)
- Displays 5-day forecast, wind, precipitation, cloud cover
- Switch between °C, °F, and Kelvin
- Add cities to favourites (saved in localStorage)
- Search/filter cities

## Tech stack

- React 18
- React Router
- Redux Toolkit
- Axios
- OpenWeatherMap API

## How to run
```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure
```
src/
api/weather.js        # API calls
components/CityCard/  # City card component
pages/                # Home, Details, Favorites
slices/               # Redux state
App.jsx               # Main app + routing
```

## API

Uses OpenWeatherMap. API key is in `src/api/weather.js` - replace with your own if needed.

## Hooks used

- useState, useEffect, useCallback, useMemo
- useSelector, useDispatch (Redux)
- useNavigate, useSearchParams (React Router)