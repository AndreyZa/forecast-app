import axios from 'axios';
import { ICity } from '../domain/ICity';
import { IForecast } from '../domain/IForecast';

// for better handling data
export interface IReceived {
  data: ICity | undefined;
}

export interface IReceivedForecasts {
  data: {
    city: {
      name: string;
    };
    list: IForecast[];
  };
}

export class Server {
  private static _instance: Server;

  private apiWeatherUrl: string;

  private apiForecastUrl: string;

  private constructor() {
    this.apiWeatherUrl = `${process.env.WEATHER_API}?appid=${process.env.API_KEY}`;
    this.apiForecastUrl = `${process.env.FORECAST_API}?appid=${process.env.API_KEY}`;
  }

  public static getInstance(): Server {
    if (!Server._instance) {
      Server._instance = new Server();
    }
    return Server._instance;
  }

  public async getCity(city: string): Promise<IReceived> {
    try {
      return await axios.get(`${this.apiWeatherUrl}&q=${city}&units=metric`);
    } catch (_) {
      return { data: undefined };
    }
  }

  public async getForecastForCity(nameCityForForecast: string): Promise<IReceivedForecasts> {
    try {
      return await axios.get(`${this.apiForecastUrl}&q=${nameCityForForecast}&units=metric`);
    } catch (_) {
      return {
        data: {
          city: {
            name: '',
          },
          list: [],
        },
      };
    }
  }
}
