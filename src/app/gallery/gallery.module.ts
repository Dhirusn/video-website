import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { RouterModule } from '@angular/router';
import { VideoDetailComponent } from './video-detail/video-detail.component';



@NgModule({
  declarations: [
    FilterMenuComponent,
    GalleryComponent,
    GalleryItemComponent,
    VideoDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FilterMenuComponent,
    GalleryComponent,
    GalleryItemComponent]
})
export class GalleryModule { }
