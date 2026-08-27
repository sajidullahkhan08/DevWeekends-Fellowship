import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError('');

      // First, get coordinates for the city
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError('City not found');
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Then, get weather data
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherResponse.json();

      setWeather({
        city: name,
        country: country,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        weathercode: weatherData.current_weather.weathercode
      });
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.city}, {weather.country}</h2>
          <div className="temperature">{weather.temperature}°C</div>
          <div className="details">
            <p>Wind Speed: {weather.windspeed} km/h</p>
            <p>Weather Code: {weather.weathercode}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
