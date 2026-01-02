import SearchBar from "./components/SearchBar/SearchBar";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherConditions from "./components/WeatherConditions/WeatherConditions";
import { useEffect, useState } from "react";
import { WeatherContext } from "./context/WeatherContext/WeatherContext";

const App = () => {
  const [apiData, setApiData] = useState({ name: "", text: "", temp_c: "", humidity: "", wind_kph: "" });
  const [location, setLocation] = useState("");
  const [locationName, setLocationName] = useState("");
  useEffect(() => {
    if (location) {
      const weatherInfo = async (location: string) => {
        try {
          const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=084fac9c5b0641ab98e183450251406&q=${location}&aqi=no`
          );
          if (!response.ok) return null;
          const data = await response.json();
          const { name } = data.location;
          const {
            condition: { text },
            temp_c,
            humidity,
            wind_kph,
          } = data.current;
          setApiData({ name, text, temp_c, humidity, wind_kph });
        } catch (error) {
          console.log(error);
        }
      };
      weatherInfo(locationName);
    }
  }, [locationName]);
  const handleSetLocation = (e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value);
  const handleSetIsLocationName = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.trim() === "") return;
    setLocationName(location);
  };
  return (
    <div className="container">
      <SearchBar location={location} onSetLocation={handleSetLocation} sendLocationName={handleSetIsLocationName} />
      <WeatherContext.Provider value={apiData.text}>
        <WeatherInfo temp_c={apiData.temp_c} name={apiData.name} text={apiData.text} />
        <WeatherConditions humidity={apiData.humidity} wind_kph={apiData.wind_kph} />
      </WeatherContext.Provider>
    </div>
  );
};

export default App;
