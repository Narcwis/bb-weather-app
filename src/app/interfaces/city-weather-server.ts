import { WeatherServer } from './weather-server';

export interface CityWeatherServer {
    coord: {
        lon: number; lat: number
    };
    weather: WeatherServer[];
    base: string;
    main: {
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number
    };
    clouds: {
        all: number
    };
    dt: number;
    sys: {
        type: number;
        id: string;
        message: number;
        country: string;
        sunrise: number;
        sunset: number
    };
    id: number;
    name: string;
    cod: number;
}
