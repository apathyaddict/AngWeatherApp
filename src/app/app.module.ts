import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { InputCompComponent } from './input-comp/input-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    InputCompComponent,
    WeatherSearchComponent,
    InputCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
