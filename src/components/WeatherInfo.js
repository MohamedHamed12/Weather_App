import React from 'react';

function WeatherInfo({ weather }) {
  return (
    <div className="bg-white p-4 rounded shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <p className="text-lg">{weather.weather[0].description}</p>
      <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
      <p className="text-sm text-gray-500">Humidity: {weather.main.humidity}%</p>
      <p className="text-sm text-gray-500">Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherInfo;
