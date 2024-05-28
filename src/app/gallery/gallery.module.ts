import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { RouterModule } from '@angular/router';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    FilterMenuComponent,
    GalleryComponent,
    GalleryItemComponent,
    VideoDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FontAwesomeModule
  ],
  exports: [
    FilterMenuComponent,
    GalleryComponent,
    GalleryItemComponent]
})
export class GalleryModule { }
