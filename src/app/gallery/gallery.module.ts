import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';



@NgModule({
  declarations: [
    FilterMenuComponent,
    GalleryComponent,
    GalleryItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FilterMenuComponent,
    GalleryComponent,
    GalleryItemComponent]
})
export class GalleryModule { }
