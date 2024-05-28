import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { VideoDetailComponent } from './gallery/video-detail/video-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: "full"
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'aboutme', component: AboutComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  { path: 'video-detail', component: VideoDetailComponent },
  {
    path: '**', redirectTo: 'home', pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
