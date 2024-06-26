import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './pages/post/post.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { AuthorComponent } from './pages/author/author.component';
import { PageDefaultComponent } from './components/page-default/page-default.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BackScrollComponent } from './components/back-scroll/back-scroll.component';
import { AuthorDetailComponent } from './pages/author-detail/author-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    PostComponent,
    PostDetailComponent,
    AuthorComponent,
    PageDefaultComponent,
    PageNotFoundComponent,
    BackScrollComponent,
    AuthorDetailComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
