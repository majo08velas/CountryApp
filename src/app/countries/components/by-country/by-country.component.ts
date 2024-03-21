import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit{

  countries:Country[]=[];
  initialValue: string = "";

  constructor(private countryService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }

  search(countryName:string):void{
    this.countryService.searchCountry(countryName).subscribe(res =>{
      this.countries = res;
    })
  }

}
