import { Component, OnInit } from '@angular/core';
import { User } from '../services/user';
import { Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel=new User("","");
  err=""
  constructor(private _ro:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.userModel.uemail==="abc@gmail.com" && this.userModel.upwd==="abcd"){
      localStorage.setItem('token', "e%cagshsauyduayuaactctctdt&lkuwgahtshdpi")
      this._ro.navigate(['/home'])
    }
    else{
      this._ro.navigate(['/login'])
      this.err="Please enter valid credentials"
    }

  }

}
