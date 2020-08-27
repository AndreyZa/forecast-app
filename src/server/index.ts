import axios from 'axios';
import { ICity } from '../domain/ICity';

// for better handling data
export interface IReceived {
  data: ICity;
}

export class Server {
  private static _instance: Server;

  private apiUrl: string;

  private constructor() {
    this.apiUrl = `${process.env.WEATHER_API}?appid=${process.env.API_KEY}`;
  }

  public static getInstance(): Server {
    if (!Server._instance) {
      Server._instance = new Server();
    }
    return Server._instance;
  }

  public async getCity(city: string): Promise<IReceived> {
    return await axios.get(`${this.apiUrl}&q=${city}`);
  }
}
