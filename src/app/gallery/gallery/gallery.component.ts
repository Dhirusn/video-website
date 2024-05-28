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
    { thumbnail: 'https://images.unsplash.com/photo-1633515257379-5fda985bd57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400', thumbnailCaption: "first", redirectLink: "" },
    { thumbnail: 'https://images.unsplash.com/photo-1633209931146-260ce0d16e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400', thumbnailCaption: "second", redirectLink: "" },
    { thumbnail: 'https://images.unsplash.com/photo-1568444438385-ece31a33ce78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400', thumbnailCaption: "third", redirectLink: "" },
    { thumbnail: 'https://images.unsplash.com/photo-1633635146842-12d386e64058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400', thumbnailCaption: "fourth", redirectLink: "" },
    { thumbnail: 'https://images.unsplash.com/photo-1633621533308-8760aefb5521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjAyMQ&ixlib=rb-1.2.1&q=80&w=400', thumbnailCaption: "fourth", redirectLink: "" },
    { thumbnail: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA0OTI3Nw&ixlib=rb-1.2.1&q=80&w=400', thumbnailCaption: "fourth", redirectLink: "" },
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

}