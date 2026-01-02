import clear from "../../assets/clear.png";
import cloud from "../../assets/cloud.png";
import drizzle from "../../assets/drizzle.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
import { type WeatherInfoProps } from "../../../data";
import { WeatherContext } from "../../context/WeatherContext/WeatherContext";
import { useContext } from "react";

const WeatherInfo = ({ temp_c, name }: WeatherInfoProps) => {
  const weatherImage = useContext(WeatherContext);
  if (!weatherImage) return;
  let weatherConditionImage;
  if (weatherImage.toLowerCase().includes("snow")) weatherConditionImage = snow;
  if (weatherImage.toLowerCase().includes("cloud")) weatherConditionImage = cloud;
  if (weatherImage.toLowerCase().includes("clear") || weatherImage.toLowerCase().includes("sunny"))
    weatherConditionImage = clear;
  if (
    weatherImage.toLowerCase().includes("rain") ||
    weatherImage.toLowerCase().includes("mist") ||
    weatherImage.toLowerCase().includes("overcast")
  )
    weatherConditionImage = rain;
  if (weatherImage.toLowerCase().includes("little rain")) weatherConditionImage = drizzle;
  return (
    <div className="weather-info">
      {weatherConditionImage && <img src={weatherConditionImage} alt="sun image" className="weather-img" />}
      {weatherConditionImage && (
        <p className="temperature">
          {temp_c}
          <span>°C</span>
        </p>
      )}
      {weatherConditionImage && <p className="weather-localization">{name}</p>}
    </div>
  );
};

export default WeatherInfo;
