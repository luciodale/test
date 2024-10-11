import { cities } from "./cities";

type WeatherInfo = {
  temperature: string;
  humidity: string;
  condition: string;
};

type TWeather = {
  [key: string]: WeatherInfo | undefined;
};

function getRandomWeather() {
  const conditions = ["Sunny", "Cloudy", "Rainy", "Snowy"];
  return {
    temperature: (Math.random() * 40 - 10).toFixed(1), // Random temperature between -10 and 30
    humidity: (Math.random() * 100).toFixed(1), // Random humidity between 0 and 100
    condition: conditions[Math.floor(Math.random() * conditions.length)],
  };
}

// Create a new object with half the length of the original
const halfLength = Math.floor(cities.length / 2);
export const weatherData: TWeather = {};

for (let i = 0; i < halfLength; i++) {
  const city = cities[i * 2]; // Select every second city
  const weather = getRandomWeather();
  weatherData[`${city.lat},${city.lng}`] = {
    temperature: weather.temperature,
    humidity: weather.humidity,
    condition: weather.condition,
  };
}
