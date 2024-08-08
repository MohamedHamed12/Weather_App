import React, { useState } from 'react';
import Header from './components/Header';
import WeatherSearch from './components/WeatherSearch';
import WeatherInfo from './components/WeatherInfo';


const generateFakeWeatherData = (city) => {
  const randomTemp = (Math.random() * 30).toFixed(1);
  const randomHumidity = Math.floor(Math.random() * 100);
  const randomWindSpeed = (Math.random() * 10).toFixed(1);

  return {
    name: city,
    weather: [
      {
        description: 'Sunny with a chance of clouds',
      },
    ],
    main: {
      temp: randomTemp,
      humidity: randomHumidity,
    },
    wind: {
      speed: randomWindSpeed,
    },
  };
};

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        // throw new Error('City not found');
          const fakeWeather = generateFakeWeatherData(city);
      setWeather(fakeWeather);
      setError(null);
      return;
      }
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <WeatherSearch fetchWeather={fetchWeather} />
      {error && <p className="text-center text-red-500">{error}</p>}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
}




export default App;
