import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.scss'
})
export class GalleryItemComponent {
  @Input() thumbnailSrc: string | undefined; // Input for thumbnail image source
  @Input() thumbnailCaption: string | undefined; // Input for thumbnail image source
  @Input() videoSrc: string | undefined; // Input for video source
  @Input() videoRouterLink: string | undefined; // Input for video source
  @ViewChild('videoElement') videoElement: any; // Reference to the video element

  playVideo() {
    this.videoElement.nativeElement.style.opacity = '1';
    this.videoElement.nativeElement.play();
  }

  pauseVideo() {
    this.videoElement.nativeElement.pause();
    this.videoElement.nativeElement.style.opacity = '0';
  }

  disableContextMenu(event: MouseEvent) {
    event.preventDefault();
  }
}
