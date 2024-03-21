import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit{

  country?:Country;

  constructor(private activatedRoute:ActivatedRoute,
              private router: Router,
              private countryService:CountriesService){}//aun no se ha construido el html

  /**Se utiliza el pipe para llamar al switchmap, el cual tomará el id
   * de la ruta y con ese id enviar la petición al servicio y obtener
   * el resultado.
   * El switchmap recibe el valor anterior que es un observable y retorna
   * un nuevo observable
   */
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.countryService.searchAlpha(id))
    ).subscribe(country => {
      if (!country) return this.router.navigateByUrl('');
      return this.country = country;
    })
  }

}
