import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherService } from '../services/weather.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private wr:WeatherService,
  private _router:Router){}
  canActivate():boolean{
    if(this.wr.loggedIn()){
      return true
    }else{
      this._router.navigate(['/pagenot-found'])
      return false
    }
  }
}

