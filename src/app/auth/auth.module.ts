import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    ForgetComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
