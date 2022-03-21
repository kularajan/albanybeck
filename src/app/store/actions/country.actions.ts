import { createAction, props } from '@ngrx/store'
import { Country } from '../../models/country.model'

export const getRegionCountries = createAction(
    '[Country] Get countries', 
    props<{query:string}>()
);

export const getCountriesSuccess = createAction(
    '[Country/API] Get countries success',
   // (countries: ReadonlyArray<Country>) => ({ countries })
   props<{countries:Country[]}>()
);


export const getCountriesFailure = createAction(
    '[Country/API] Get countries failure',
   // (countries: ReadonlyArray<Country>) => ({ countries })
   props<{errorMsg:string}>()
);

