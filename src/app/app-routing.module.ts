import { ForecastComponent } from './forecast/forecast.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { AuthGuard } from './Auth/auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {
    path:'home', 
    component:HomeComponent,
    canActivate:[AuthGuard],
      children:[
        {path:'forecast', component:ForecastComponent,canActivate:[AuthGuard]}

      ]
  
  },
  {path:'page-not-found', component:PagenotFoundComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'forecast', component:ForecastComponent,canActivate:[AuthGuard]},
  
 
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'**', redirectTo:'/page-not-found', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
