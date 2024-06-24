import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { VideoDetailComponent } from './gallery/video-detail/video-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: "full"
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'blog-detail', component: BlogDetailComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'video-detail', component: VideoDetailComponent
  },
  {
    path: '**', redirectTo: 'home', pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top', // Add this line for scroll to top behavior
    anchorScrolling: 'enabled', // Optional: Enable anchor scrolling
    scrollOffset: [0, 64] // Optional: Adjust scroll offset if you have a fixed header
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
