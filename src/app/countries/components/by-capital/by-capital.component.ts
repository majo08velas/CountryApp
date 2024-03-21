import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit{

  public countries:Country[]=[];
  isLoading: boolean = false;
  initialValue: string = "";

  constructor(private countryService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  search(valueFromSearchBox:string):void {
    this.isLoading = true;
    this.countryService.searchCapital(valueFromSearchBox).subscribe(res =>{
      this.countries = res;
      this.isLoading = false;
    })
  }
}
