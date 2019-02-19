import { WeatherServer } from './weather-server';

export interface CityHourForecastServer {
    clouds: {
            all: 92
    };
    all: number;
    dt: number;
    dt_txt: Date;
    main: {
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_kf: number;
        temp_max: number;
        temp_min: number;
    };
    rain: {
        '3h': number;
    };
    sys: {
        pod: string;
    };
    weather: WeatherServer[];
    wind: {
        speed: number;
        deg: number;
    };
}
