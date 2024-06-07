import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './pages/post/post.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { AuthorComponent } from './pages/author/author.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "home",
        title: "Home | Reinternals LABs",
        component: HomeComponent
      },
      {
        path: "post",
        title: "Postagens | Reinternals LABs",
        component: PostComponent
      },
      {
        path: "post/:id",
        title: "Detalhes da postagem | Reinternals LABs",
        component: PostDetailComponent
      },
      {
        path: "author",
        title: "Autor | Reinternals LABs",
        component: AuthorComponent
      },
      {
        path: "ops/:id",
        component: PageNotFoundComponent
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "/home"
      },
      {
        path: "**",
        redirectTo: "/ops/404"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
