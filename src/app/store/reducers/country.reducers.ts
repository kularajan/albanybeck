import { createReducer, on } from "@ngrx/store";
import { Country } from "src/app/models/country.model";
import { getRegionCountries, getCountriesSuccess  } from "../actions";
import { query } from "@angular/animations";
// import { getCountries, getCountriesSuccess } from "../actions/country.actions";

export interface State {
    searchValue: string;
    countries: Country[];
  }

  const initialState: State = {
    searchValue: '',
    countries: []
  };

export interface CountryState {
    countries: Country[];
}

// const initialiseCountries: Country[] = [{ "name":"Srilanka 1","capital":"colombo", population:200000,"flag":"", "currencies":[{"code":"ALL","name":"Albanian lek","symbol":"L"}]},{ "name":"Srilanka 2","capital":"colombo", population:200000,"flag":"", "currencies":[{"code":"ALL","name":"Albanian lek","symbol":"L"}]} ];
const initialiseCountries: Country[] = [];

export const countryReducer = createReducer(
    initialState,
    on(getRegionCountries, (state,{  query }) => ({
      ...state,
      searchValue:query,
    })) ,
    on(getCountriesSuccess, (state, { countries }) => ({
      ...state,
      countries,
    }))
  );