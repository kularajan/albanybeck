import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryService } from 'src/app/services/country.service';
import { asyncScheduler, of } from "rxjs";
import { EmptyError } from 'rxjs';
import { catchError, exhaustMap, map, tap, switchMap, debounceTime } from 'rxjs/operators';

import { getRegionCountries, getCountriesSuccess, getCountriesFailure } from '../actions';
import { Country } from 'src/app/models/country.model';



@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ) { }

  // loadCountriesByRegion$ = createEffect(() =>

  //   this.actions$.pipe(
  //     ofType(getRegionCountries),
  //     switchMap( query => 
  //       this.countryService.getCountries(query).pipe(
  //         map(res => getCountriesSuccess({ payload: query }))
  //       )
  //     )
  //   )
  // );


}