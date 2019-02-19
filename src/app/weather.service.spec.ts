import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WeatherService', () => {
    let httpMock: HttpTestingController;
    const weatherResponse = {
        coord: { lon: -0.13, lat: 51.51 },
        weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
        base: 'stations',
        main: { temp: 4.49, pressure: 1019, humidity: 87, temp_min: 3, temp_max: 6 },
        visibility: 10000,
        wind: { speed: 4.1, deg: 250 },
        clouds: { all: 0 },
        dt: 1550564400,
        sys: { type: 1, id: 1414, message: 0.0035, country: 'GB', sunrise: 1550559990, sunset: 1550596978 },
        id: 2643743,
        name: 'London',
        cod: 200
    };
    const forecastResponse = {
        cod: '200',
        message: 0.0032,
        cnt: 40,
        list: [{
            dt: 1550620800,
            main: {
                temp: 7.4,
                temp_min: 7.25,
                temp_max: 7.4,
                pressure: 1016.55,
                sea_level: 1030.14,
                grnd_level: 1016.55,
                humidity: 81,
                temp_kf: 0.15
            },
            weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
            clouds: { all: 76 },
            wind: { speed: 5.92, deg: 208.501 },
            rain: { '3h': 0.11 },
            sys: { pod: 'n' },
            dt_txt: '2019-02-20 00:00:00'
        }, {
            dt: 1550631600,
            main: {
                temp: 7.8,
                temp_min: 7.7,
                temp_max: 7.8,
                pressure: 1015.81,
                sea_level: 1029.43,
                grnd_level: 1015.81,
                humidity: 82,
                temp_kf: 0.1
            },
            weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
            clouds: { all: 92 },
            wind: { speed: 6.06, deg: 210 },
            rain: { '3h': 0.085 },
            sys: { pod: 'n' },
            dt_txt: '2019-02-20 03:00:00'
        }, {
            dt: 1550631600,
            main: {
                temp: 7.8,
                temp_min: 7.7,
                temp_max: 7.8,
                pressure: 1015.81,
                sea_level: 1029.43,
                grnd_level: 1015.81,
                humidity: 82,
                temp_kf: 0.1
            },
            weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
            clouds: { all: 92 },
            wind: { speed: 6.06, deg: 210 },
            rain: { '3h': 0.085 },
            sys: { pod: 'n' },
            dt_txt: '2019-02-20 03:00:00'
        }, {
            dt: 1550631600,
            main: {
                temp: 7.8,
                temp_min: 7.7,
                temp_max: 7.8,
                pressure: 1015.81,
                sea_level: 1029.43,
                grnd_level: 1015.81,
                humidity: 82,
                temp_kf: 0.1
            },
            weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
            clouds: { all: 92 },
            wind: { speed: 6.06, deg: 210 },
            rain: { '3h': 0.085 },
            sys: { pod: 'n' },
            dt_txt: '2019-02-20 03:00:00'
        }, {
            dt: 1550631600,
            main: {
                temp: 7.8,
                temp_min: 7.7,
                temp_max: 7.8,
                pressure: 1015.81,
                sea_level: 1029.43,
                grnd_level: 1015.81,
                humidity: 82,
                temp_kf: 0.1
            },
            weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
            clouds: { all: 92 },
            wind: { speed: 6.06, deg: 210 },
            rain: { '3h': 0.085 },
            sys: { pod: 'n' },
            dt_txt: '2019-02-20 03:00:00'
        }, ],
        city: { id: 2653822, name: 'Cardiff', coord: { lat: 51.4817, lon: -3.1792 }, country: 'GB', population: 302139 }
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                WeatherService
            ]
        });
        httpMock = TestBed.get(HttpTestingController);
    });

    it('getCityWeather should return the correct data', () => {
        const service: WeatherService = TestBed.get(WeatherService);
        service.getCityWeather('london').subscribe((data) => {
            expect(data).toEqual({
                wind: 4.1,
                temperature: 4.5,
                weather: 'Clear'
            });
        });

        const weatherRequest = httpMock.expectOne('http://api.openweathermap.org/data/2.5/weather?q=london&appid=a1f2ab50ae34639bcf782cdc54fcd195&units=metric');
        weatherRequest.flush(weatherResponse);
    });

    it('getCityWeather should return error and log it', () => {
        const service: WeatherService = TestBed.get(WeatherService);
        spyOn(console, 'log');
        service.getCityWeather('london').subscribe(() => {
        }, (err) => {
            console.log(err);
            expect(console.log).toHaveBeenCalledTimes(1);
        });

        const weatherRequest = httpMock.expectOne('http://api.openweathermap.org/data/2.5/weather?q=london&appid=a1f2ab50ae34639bcf782cdc54fcd195&units=metric');
        const error = new ErrorEvent('404');
        weatherRequest.error(error);
    });

    it('getCityForecast should return the correct data', () => {
        const service: WeatherService = TestBed.get(WeatherService);
        service.getCityForecast('london').subscribe((data) => {
            expect(data).toEqual([{
                    time: '2019-02-20 00:00:00',
                    wind: 5.92,
                    temperature: 7.4,
                    weather: 'Rain'
                }, {
                    time: '2019-02-20 03:00:00',
                    wind: 6.06,
                    temperature: 7.8,
                    weather: 'Rain'
                }, {
                    time: '2019-02-20 03:00:00',
                    wind: 6.06,
                    temperature: 7.8,
                    weather: 'Rain'
                }, {
                    time: '2019-02-20 03:00:00',
                    wind: 6.06,
                    temperature: 7.8,
                    weather: 'Rain'
                }, {
                    time: '2019-02-20 03:00:00',
                    wind: 6.06,
                    temperature: 7.8,
                    weather: 'Rain'
                }]
            );
        });

        const weatherRequest = httpMock.expectOne('http://api.openweathermap.org/data/2.5/forecast?q=london&appid=a1f2ab50ae34639bcf782cdc54fcd195&units=metric');
        weatherRequest.flush(forecastResponse);
    });

    it('getCityForecast should return error and log it', () => {
        const service: WeatherService = TestBed.get(WeatherService);
        spyOn(console, 'log');
        service.getCityForecast('london').subscribe(() => {
            console.log('done');
        }, (err) => {
            console.log(err);
            expect(console.log).toHaveBeenCalledTimes(1);
        });

        const weatherRequest = httpMock.expectOne('http://api.openweathermap.org/data/2.5/forecast?q=london&appid=a1f2ab50ae34639bcf782cdc54fcd195&units=metric');
        const error = new ErrorEvent('404');
        weatherRequest.error(error);
    });
});
