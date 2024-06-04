import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { TestimonialsComponent } from './shared/testimonials/testimonials.component';
import { GalleryModule } from './gallery/gallery.module';
import { ChunkPipe } from './pipes/chunk.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SetBgDirective } from '../app/directives/setbg-directive/set-bg.directive';
import { ServicesComponent } from './pages/services/services.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ProjectDetailsComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    TestimonialsComponent,
    ChunkPipe,
    SetBgDirective,
    ServicesComponent,
    BlogDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
