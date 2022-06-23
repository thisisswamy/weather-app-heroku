import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public weatherData:any={};
  errorMsge!:boolean;
  map = new Map<string, string>();
  constructor(private readonly fb:FormBuilder,private readonly service:WeatherService) { }

  ngOnInit(): void {
   
  }
  searchForm=this.fb.group({
    cityName:['',[Validators.required]]
  })
  onSubmit(){
    if(this.searchForm.valid){
      const location= this.searchForm.get('cityName')?.value;
      new Promise<void>((resolve,reject)=>{
        this.service.getData(location).subscribe(data=>{
          this.locationData(data); 
          this.errorMsge=false;

        },
        errMsg=>{
          this.errorMsge=true;

        }) 
        resolve()
      })

    }
    
  }
  locationData(data:any){
    for(const [key,value] of Object.entries(data)){
     let moreData:any=value;
     if(typeof moreData === 'object'){
        for(const [ele,des] of Object.entries(moreData)){
          let info:any=des;
          this.map.set(ele,info)
          if(typeof des === 'object'){
            for(const [name,nameDes] of Object.entries(info)){
              let propertyName:any=nameDes
              this.map.set(name,propertyName)

            }
          }
          
        }
     } 
    }
    
    this.weatherData={
      location:this.searchForm.get('cityName')?.value?.toUpperCase(),
      dateTime:new Date(),
      country:this.map.get("country"),
      description:this.map.get("description"),
      temp:this.map.get("temp"),
      feelsLike:this.map.get("feels_like"),
      minTemp:this.map.get("temp_min"),
      maxTemp:this.map.get("temp_max"),
      pressure:this.map.get("pressure"),
      windSpeed:this.map.get("speed"),
    }
    
    
  }
}


