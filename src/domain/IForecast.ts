import { Weather } from './ICity';

export interface IForecast {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  rain: { [key in string]: number };
  sys: { pod: string };
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}
