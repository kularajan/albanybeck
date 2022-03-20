import { createAction, props } from '@ngrx/store'
import { Country } from '../../models/country.model'

export const getCountries = createAction('[Country] Get countries');

export const getCountriesSuccess = createAction('[Country] Get countries success', (countries: ReadonlyArray<Country>) => ({ countries }));

// export const addCountry = createAction('[Country] Add country', props<{ country: Country }>());
export const addCountry = createAction('[Country] Add country', (country:Country) =>({country}));

// export const addCountrySuccess = createAction('[Country] Add country success', props<{ country: Country }>());
export const addCountrySuccess = createAction('[Country] Add country success', (country:Country) =>({country}));

export const getRegions = createAction('[Region] Get regions');
