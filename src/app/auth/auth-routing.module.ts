import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: LoginComponent,
        title: "Entrar | Reinternals LABs"
      },
      {
        path: "forget",
        component: ForgetComponent,
        title: "Esqueci minha senha | Reinternals LABs"
      },
      {
        path: "register",
        component: RegisterComponent,
        title: "Registrar-se | Reinternals LABs"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
