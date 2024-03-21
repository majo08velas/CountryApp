import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit{

  countries:Country[]=[];
  regions:Region[] = ['Africa','Americas','Asia','Europe','Oceania']
  selectedRegion?:Region;

  constructor(private countryService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }

  search(regionName:Region):void{
    this.selectedRegion = regionName;
    this.countryService.searchRegion(regionName).subscribe(res=>{
      this.countries = res;
    })
  }

}
