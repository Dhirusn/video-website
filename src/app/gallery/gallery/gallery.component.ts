import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import Plyr from 'plyr';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {

  }


  videos = [
    { url: 'assets/videos/video_1.mp4', thumbnail: 'assets/thumbnails/thumbnail_2.jpg', isPlaying: false, tittle: "first" },
    { url: 'assets/videos/video_1.mp4', thumbnail: 'assets/thumbnails/thumbnail_1.jpg', isPlaying: false, tittle: "second" },
    { url: 'assets/videos/video_1.mp4', thumbnail: 'assets/thumbnails/thumbnail_2.jpg', isPlaying: false, tittle: "third" },
    { url: 'assets/videos/video_1.mp4', thumbnail: 'assets/thumbnails/thumbnail_1.jpg', isPlaying: false, tittle: "fourth" },
    // Add more videos as needed
  ];

  @ViewChildren('videoRef') videoElements: QueryList<ElementRef> | undefined;

  players: Plyr[] = [];

  ngAfterViewInit() {
    if (this.videoElements == null) return;
    this.videoElements.forEach((videoElement, index) => {
      videoElement.nativeElement.addEventListener('mouseover', () => {
        videoElement.nativeElement.play();
      });

      videoElement.nativeElement.addEventListener('mouseout', () => {
        videoElement.nativeElement.pause();
      });
    });
  }

  getVideoClass(index: number) {
    const positions = ['right', 'left', 'center', 'center'];
    return positions[index % positions.length];
  }
}