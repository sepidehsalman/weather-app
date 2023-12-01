import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);

  function getWeather() {
    const apiKey = "";
    const url = "";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("data", data);
        //  let MT = Math.round(data.main.temp);
        let FL = Math.round(data.main.feels_like);

        const weather = {
          location: `weather in ${data.names}`,
          tempreture: `tempreture `,
          feelsLike: `Feels like ${FL}`,
        };

        setWeatherInfo(weather);
      })
      .catch((error) => {
        // console.error(error);
      });
  }
  return (
    <div className="App bg-gray-200">
      <div className="bg-gray-800 h-96 grid place-items-center">
        <div className="bg-white w-96 rounded-md">
          <input
            type="text"
            placeholder="Enter Your Location"
            className="text-xl border-b p-1 border-gray-200"
          />
        </div>
      </div>
      ;
      <input
        type="text"
        placeholder="enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {weatherInfo && (
        <div className="weather-info">
          <h3>{weatherInfo.FL}</h3>
          <p>{weatherInfo.location}</p>
          <p>{weatherInfo.MT}</p>
        </div>
      )}
    </div>
  );
}

export default App;
