import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-input-comp',
  templateUrl: './input-comp.component.html',
  styleUrl: './input-comp.component.css'
})
export class InputCompComponent implements OnInit{

  ngOnInit() {
    this.getLocation();
  }

  constructor(private httpClient: HttpClient) {}

  weatherResults : any;
  latitude: number | undefined;
  longitude: number | undefined;

  apiKey = environment.apiKey;

  getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
       
          this.getLocalWeather(); // 
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
    }

    getLocalWeather() {
      if (this.latitude !== undefined && this.longitude !== undefined) {
        this.httpClient.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&limit=6&appid=${this.apiKey}&units=metric`).subscribe(
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

    isCloudy(): boolean {
      const description = this.weatherResults.list[0].weather[0].description.toLowerCase();
      return ['cloud', 'cloudy', 'clouds', 'rain', 'thunderstom', "storm", "snow"].some(keyword => description.includes(keyword));
    }

    getTopWeatherClass(): string {
      return this.isCloudy() ? 'cloudy' : 'sunny';
    }

  }
  


