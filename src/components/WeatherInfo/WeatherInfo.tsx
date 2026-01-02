import clear_weather from "../../assets/clear.png";

const WeatherInfo = () => {
  return (
    <div className="weather-info">
      <img src={clear_weather} alt="sun image" className="weather-img" />
      <p className="temperature">
        21<span>°C</span>
      </p>
      <p className="weather-localization">New York</p>
    </div>
  );
};

export default WeatherInfo;
