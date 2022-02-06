import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { LoginComponent } from './login/login.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForecastComponent } from './forecast/forecast.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotFoundComponent,
    ForgotpasswordComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule ,HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
