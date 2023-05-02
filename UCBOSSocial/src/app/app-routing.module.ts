import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CaptchaDetailsComponent } from './captcha-details/captcha-details.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/loginPage', pathMatch: 'full' },
  { path: 'loginPage', component: LoginScreenComponent },
  { path: 'captchaPage', component: CaptchaDetailsComponent },
  { path: 'registerForm', component:RegisterFormComponent},
  { path: 'homeScreen', component:HomeScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
