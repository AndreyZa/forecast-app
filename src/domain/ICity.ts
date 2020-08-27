// for better handling data

export type Coordinates = {
  lon: number;
  lat: number;
};

export type Main = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

export type Sys = {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
};

export type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export interface ICity {
  clouds: {
    all: number;
  };

  cod: number;

  coord: Coordinates;

  dt: number;

  main: Main;

  name: string;

  rain: {
    [key in string]: number;
  };

  sys: Sys;

  timezone: number;
  visibility: number;
  weather: Weather[];
}
