import { createSlice } from '@reduxjs/toolkit';
import { TEMPERATURE_UNITS } from '../constants/temperatureUnits';

// wczytaj z localStorage jeśli jest
const savedState = JSON.parse(localStorage.getItem('weatherState'));

const initialState = {
  temperatureUnits: savedState?.temperatureUnits || TEMPERATURE_UNITS.CELSIUS,
  favorites: savedState?.favorites || [],
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setTemperatureUnits(state, action) {
      state.temperatureUnits = action.payload;
      // zapisz do localStorage
      localStorage.setItem('weatherState', JSON.stringify(state));
    },
    toggleFavorite(state, action) {
      const cityId = action.payload;
      if (state.favorites.includes(cityId)) {
        // usuń z ulubionych
        state.favorites = state.favorites.filter(id => id !== cityId);
      } else {
        // dodaj do ulubionych
        state.favorites.push(cityId);
      }
      // zapisz do localStorage
      localStorage.setItem('weatherState', JSON.stringify(state));
    },
  },
});

export const { setTemperatureUnits, toggleFavorite } = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;