import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage:any='';
  constructor(private readonly fb:FormBuilder,
    private readonly router:Router,
    private readonly service:WeatherService
    ) { }

  ngOnInit(): void {
  }
  loginForm=this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],
  })
  onSubmit(){
    const username=this.loginForm.get('username')?.value;
    const password=this.loginForm.get('password')?.value;
    if(username ==='abc@gmail.com' && password==='Abcd777@'){
      this.service.isUserLoggedIn.next(true)
      this.errorMessage=''
      this.router.navigate(['/home']) 
    }
    this.errorMessage='please enter valid given credentials'
    return false;
  }

}
