export type ApiData = { name: ""; text: ""; temp_c: ""; humidity: ""; wind_kph: "" };
export type SearchBarProps = { location: string; onSetLocation: (e: React.ChangeEvent<HTMLInputElement>) => void };
export type WeatherInfoProps = { name: string; temp_c: string; text: string };
export type WeatherConditionsProps = { humidity: string; wind_kph: string };
