import SearchBar from "./components/SearchBar/SearchBar";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherConditions from "./components/WeatherConditions/WeatherConditions";
import { useEffect, useState } from "react";

const App = () => {
  const [apiData, setApiData] = useState({ name: "", text: "", temp_c: "", humidity: "", wind_kph: "" });
  const [location, setLocation] = useState("");
  useEffect(() => {
    if (location) {
      const weatherInfo = async (location: string) => {
        try {
          const data = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=084fac9c5b0641ab98e183450251406&q=${location}&aqi=no`
          );
          const response = await data.json();
          // console.log(response);
          const { name } = response.location;
          const {
            condition: { text },
            temp_c,
            humidity,
            wind_kph,
          } = response.current;
          setApiData({ name, text, temp_c, humidity, wind_kph });
        } catch (error) {
          console.log(error);
        }
      };
      weatherInfo(location);
    }
  }, [location]);

  const handleSetLocation = (e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value);
  return (
    <div className="container">
      <SearchBar location={location} onSetLocation={handleSetLocation} />
      <WeatherInfo temp_c={apiData.temp_c} name={apiData.name} text={apiData.text} />
      <WeatherConditions humidity={apiData.humidity} wind_kph={apiData.wind_kph} />
    </div>
  );
};

export default App;

// http://api.weatherapi.com/v1/current.json?key=084fac9c5b0641ab98e183450251406&q=London&aqi=no
