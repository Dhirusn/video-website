import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.scss'
})
export class GalleryItemComponent {
  @Input() thumbnailSrc: string | undefined; // Input for thumbnail image source
  @Input() thumbnailCaption: string | undefined; // Input for thumbnail image source
  @Input() videoSrc: string | undefined; // Input for video source
  @Input() videoRouterLink: string[] | undefined;
  @Input() queryParams: { url: string } | undefined;
  @ViewChild('videoElement') videoElement: any; // Reference to the video element
  constructor(private router: Router) {}
  navigate(): void {
    this.router.navigate(this.videoRouterLink!, { queryParams: this.queryParams });
  }
}
