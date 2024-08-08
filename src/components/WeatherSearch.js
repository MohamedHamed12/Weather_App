import React, { useState } from 'react';

function WeatherSearch({ fetchWeather }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 flex justify-center">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border rounded-l flex-grow max-w-xs"
        placeholder="Enter city..."
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-r">
        Search
      </button>
    </form>
  );
}

export default WeatherSearch;
