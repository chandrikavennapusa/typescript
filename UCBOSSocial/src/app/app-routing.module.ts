import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CaptchaDetailsComponent } from './captcha-details/captcha-details.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CanactivateserviceService } from './canactivateservice.service';
import { CanactivateService } from './canactivate.service';
import { CanactivateservicesService } from './canactivateservices.service';

const routes: Routes = [
  { path: '', redirectTo: '/loginPage', pathMatch: 'full' },
  { path: 'loginPage', canActivate: [CanactivateService],component: LoginScreenComponent },
  { path: 'captchaPage',canActivate: [CanactivateserviceService,CanactivateService] ,component: CaptchaDetailsComponent },
  { path: 'registerForm',canActivate: [CanactivateService],component:RegisterFormComponent},
  { path: 'homeScreen', canActivate: [CanactivateserviceService,CanactivateservicesService], component:HomeScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
