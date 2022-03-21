import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { Country } from "src/app/models/country.model";
import { CountryState } from "../reducers/country.reducers";

export const countrySelector = createSelector(
    (state:CountryState) => state.countries,(countries:Country[]) => countries
)