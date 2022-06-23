import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private wr:WeatherService,
  private _router:Router){}
  canActivate():boolean{
    if(!this.wr.isUserLoggedIn.value){
      this._router.navigate(['user'])
      return false
    }
    return true
  }
}

