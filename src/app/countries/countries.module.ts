import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './components/by-capital/by-capital.component';
import { ByCountryComponent } from './components/by-country/by-country.component';
import { ByRegionComponent } from './components/by-region/by-region.component';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryPageComponent,
    CountryTableComponent
  ],
  imports: [
    CountriesRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class CountriesModule { }
