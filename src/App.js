import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}

export default App;
