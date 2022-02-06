import { Component, OnInit } from '@angular/core';
import { Fdata } from '../services/fdata';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  obj:any[]=[]
  public weatherData :any;
  public forecastData: any;
  count=1;

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
  //-------------------------
  public ftemparature:any;

  public fmaxtemp:any;
  public fmintemp:any;
  public fweatherdescription:any;
  public fwindspeed:any;
  public fdate:any;
  public ffeels_like:any;
  public fpressure:any;
  public fhumidity:any;
 

  constructor(private service:WeatherService) { }

  ngOnInit(): void {
     
     this.onSubmit()
     //console.log("-----------from forcast------------");
     //console.log(this.service.loc);
     this.onForecast()
  }
  onSubmit(){
    this.service.getData(this.service.loc).subscribe((data: any) => { 
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
    
 
    });
 
  }

  onForecast(){
    //console.log("from fore cast ---> " + this.service.loc)
    this.service.getForecast(this.service.loc).subscribe((data: any) => { 
      this.forecastData=data;
      for(let i=7;i<=35;i=i+7){
        this.count=this.count+1
          this.fdate=this.forecastData.list[i].dt_txt
          this.ftemparature=(this.forecastData.list[i].main.temp-273.15).toFixed(0)
          this.fmaxtemp=(this.forecastData.list[i].main.temp_max-273.15).toFixed(0)
          this.fmintemp=(this.forecastData.list[i].main.temp_min-273.15).toFixed(0)
          this.fpressure=this.forecastData.list[i].main.pressure
          this.fweatherdescription=this.forecastData.list[i].weather[0].main 
          this.obj.push(new Fdata(this.count/2,this.fdate,this.ftemparature,this.fmaxtemp,this.fmintemp,this.fweatherdescription))
          this.count+=1
      //   console.log(i +"----------------------------------------------------")
      //   console.log(this.forecastData.list[i].dt_txt +"from list")
      // console.log((this.forecastData.list[i].main.temp-273.15).toFixed(0) +"temparature")
      // console.log((this.forecastData.list[i].main.temp_max-273.15).toFixed(0) +" max temparature")
      // console.log((this.forecastData.list[i].main.temp_min-273.15).toFixed(0) +" min temparature")
      // console.log((this.forecastData.list[i].weather[0].main +" description "))
      // console.log(this.forecastData.list[i].main.pressure +" pressure ")
      // console.log("----------------------------------------------------")
      }
    



    // console.log(this.forecastData.list[14].dt_txt +"from list")
    // console.log((this.forecastData.list[7].main.temp-273.15).toFixed(0) +"temparature")
    // console.log((this.forecastData.list[7].main.temp_max-273.15).toFixed(0) +" max temparature")
    // console.log((this.forecastData.list[7].main.temp_min-273.15).toFixed(0) +" min temparature")
    // console.log((this.forecastData.list[7].weather[0].main +" description "))
    // console.log(this.forecastData.list[7].main.pressure +" pressure ")
    // console.log("------obj list ----------")
    console.log(this.obj)

    });

  }
  

}
