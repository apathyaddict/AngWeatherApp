import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputCompComponent } from './input-comp/input-comp.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

const routes: Routes = [
  {component:InputCompComponent, path:''},
  {component:WeatherSearchComponent, path:'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
