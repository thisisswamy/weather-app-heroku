import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public loc:any;
  isUserLoggedIn=new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient,private _router:Router) { }
  getData(location:any):Observable<any>{
    this.loc=location;
     return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+location +"&appid=38c18f50a4e4f31e77406ee722f0ac32")
  }
  getForecast(location:any):Observable<any>{
     return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+location +"&appid=38c18f50a4e4f31e77406ee722f0ac32");
  }

  

}
