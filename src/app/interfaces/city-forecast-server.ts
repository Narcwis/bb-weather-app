import { CityHourForecastServer } from './city-hour-forecast-server';

export interface CityForecastServer {
    city: {
        id: number,
        name: string;
        coord: {
                lat: number;
                lon: number
        };
        country: string;
        population: 39319
    };
    cnt: number;
    cod: string;
    list: CityHourForecastServer[];
    message: number;
}
