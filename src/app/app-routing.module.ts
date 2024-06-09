import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import( './auth/auth.module' ).then( m => m.AuthModule )
  },
  {
    path: "user",
    loadChildren: () => import( './private/private.module' ).then( m => m.PrivateModule )
  },
  {
    path: "",
    loadChildren: () => import( './public/public.module' ).then( m => m.PublicModule )
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
