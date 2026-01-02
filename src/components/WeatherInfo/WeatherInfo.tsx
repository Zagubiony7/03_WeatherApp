import clear from "../../assets/clear.png";
import cloud from "../../assets/cloud.png";
import drizzle from "../../assets/drizzle.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
import { type WeatherInfoProps } from "../../../data";

const WeatherInfo = ({ temp_c, name, text }: WeatherInfoProps) => {
  let weatherImage;
  if (text.includes("snow")) weatherImage = snow;
  if (text.includes("cloud")) weatherImage = cloud;
  if (text.includes("clear") || text.includes("sunny")) weatherImage = clear;
  if (text.includes("rain")) weatherImage = rain;
  if (text.includes("little rain")) weatherImage = drizzle;
  return (
    <div className="weather-info">
      {weatherImage ? (
        <img src={weatherImage} alt="sun image" className="weather-img" />
      ) : (
        <div className="no-weather-img"></div>
      )}
      <p className="temperature">
        {temp_c}
        <span>°C</span>
      </p>
      <p className="weather-localization">{name}</p>
    </div>
  );
};

export default WeatherInfo;
