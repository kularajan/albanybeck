import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { regionReducer, countryReducer } from './store/reducers';
import { CountryEffects } from './store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      regions:regionReducer, countries:countryReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CountryEffects]),
    EffectsModule.forFeature([CountryEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
