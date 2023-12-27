import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent {

  constructor(private httpClient: HttpClient) {}

  weatherResults : any;
  latitude: number | undefined;
  longitude: number | undefined;
  cityName: string = '';
  apiKey = environment.apiKey;

  getCity(city: string) {
    this.httpClient.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}`).subscribe(
      (result: any) => {
        console.log("data", result);
        this.latitude = result[0]?.lat;
        this.longitude = result[0]?.lon;

        console.log(this.latitude, this.longitude);

        // Call the getWeather function after obtaining latitude and longitude
        this.getWeather();
      },
      error => {
        console.error('Error fetching city data', error);
      }
    );
  }

  getWeather() {
    if (this.latitude !== undefined && this.longitude !== undefined) {
      this.httpClient.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&appid=${this.apiKey}`).subscribe(
        (weatherResults: any) => {
          console.log("Weather data", weatherResults);
          this.weatherResults = weatherResults;
        },
        error => {
          console.error('Error fetching weather data', error);
        }
      );
    } else {
      console.error('Latitude and longitude are not defined.');
    }
  }
}
