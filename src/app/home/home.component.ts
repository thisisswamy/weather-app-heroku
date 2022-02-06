import { FormsModule } from '@angular/forms';
import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //location=""
  userModel=new User("","");
  public weatherData :any;
  public clocation:any;
  public ctemparature:any;
  public cmaxtemp:any;
  public cdate:any;
  public ctime:any;
  public longitude:any;
  public lattitude:any;
  public cweatherdescription:any;
  public feels_like:any;
  public humidity:any;
  public country:any;
  public pressure:any;
  public cmintemp:any;
  public windspeed:any;



  constructor(private sr:WeatherService, private _router:Router) { }
  location:string=""; 
  err=''
  flag:Boolean=false;
  ngOnInit(): void {
    //console.log(this.sr.loc + "onit" )
    this.dummyMethod()
  }
  onSubmit(value: { location: any; }){
    if(value.location===""){this.err="Please enter search location..."}
    else{ 
    //console.log(value.location +" "+ "button click")
    this.sr.getData(value.location).subscribe((data: any) => { 
    this.weatherData=data;
    this.clocation=this.weatherData.name
    this.ctime=new Date();
    this.ctime=this.ctime.toLocaleTimeString()
    this.ctemparature=(this.weatherData.main.temp-273.15).toFixed(0)
    this.cmaxtemp=(this.weatherData.main.temp_max-273.15).toFixed(0)
    this.cmintemp=(this.weatherData.main.temp_min-273.15).toFixed(0)
    this.country=this.weatherData.sys.country
    this.pressure=this.weatherData.main.pressure 
    this.cweatherdescription=this.weatherData.weather[0].main 
    this.feels_like=(this.weatherData.main.feels_like-273.15).toFixed(0)
    this.windspeed=this.weatherData.wind.speed
    this.humidity=this.weatherData.main.humidity
    //console.log(this.weatherData)
    this.flag=true 
    this.err=""
    });
  }
   // console.log(this.weatherData.name + "from home to service")
}
fr(){
  if(this.flag){
    this._router.navigate(['/forecast']);
    
  }
}
 logoutUser(){
   localStorage.removeItem('token')
   this._router.navigate(['/login'])

 }
 dummyMethod(){
   if(this.sr.loc !=undefined) { 
  console.log(this.sr.loc +" "+ "button click")
  this.sr.getData(this.sr.loc ).subscribe((data: any) => { 
  this.weatherData=data;
  this.clocation=this.weatherData.name
  this.ctime=new Date();
  this.ctime=this.ctime.toLocaleTimeString()
  this.ctemparature=(this.weatherData.main.temp-273.15).toFixed(0)
  this.cmaxtemp=(this.weatherData.main.temp_max-273.15).toFixed(0)
  this.cmintemp=(this.weatherData.main.temp_min-273.15).toFixed(0)
  this.country=this.weatherData.sys.country
  this.pressure=this.weatherData.main.pressure 
  this.cweatherdescription=this.weatherData.weather[0].main 
  this.feels_like=(this.weatherData.main.feels_like-273.15).toFixed(0)
  this.windspeed=this.weatherData.wind.speed
  this.humidity=this.weatherData.main.humidity
  console.log(this.weatherData)
  this.flag=true
  });
 
 }
}

}
