import humidity_img from "../../assets/humidity.png";
import wind_img from "../../assets/wind.png";

const WeatherConditions = () => {
  return (
    <div className="weather-conditions">
      <div className="weather">
        <img src={humidity_img} alt="humidity image" className="humidity-img" />
        <div className="weather-condition-info">
          <p>67%</p>
          <p className="weather-condition-name">Humidity</p>
        </div>
      </div>
      <div className="weather">
        <img src={wind_img} alt="wind image" className="wind-img" />
        <div className="weather-condition-info">
          <p>2.06 Km/h</p>
          <p className="weather-condition-name">Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherConditions;
