import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio-item';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger('200ms', [
            animate('500ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),

      ])
    ])
  ]
})
export class GalleryComponent implements OnInit, AfterViewInit {


  videos: Array<{ thumbnail: string, category: string, thumbnailCaption: string, videoUrl: string, date: Date }> = [
    { thumbnail: 'https://images.unsplash.com/photo-1633515257379-5fda985bd57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400', category: "ecommerce", thumbnailCaption: "first", videoUrl: "", date: new Date(2024, 5, 12) },
    { thumbnail: 'https://images.unsplash.com/photo-1633209931146-260ce0d16e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400', category: "ecommerce", thumbnailCaption: "second", videoUrl: "", date: new Date(2024, 5, 2) },
    { thumbnail: 'https://images.unsplash.com/photo-1568444438385-ece31a33ce78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400', category: "digital", thumbnailCaption: "third", videoUrl: "", date: new Date(2024, 1, 12) },
    { thumbnail: 'https://images.unsplash.com/photo-1633635146842-12d386e64058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400', category: "branding", thumbnailCaption: "fourth", videoUrl: "", date: new Date(2024, 2, 12) },
    { thumbnail: 'https://images.unsplash.com/photo-1633621533308-8760aefb5521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjAyMQ&ixlib=rb-1.2.1&q=80&w=400', category: "digital-marketing", thumbnailCaption: "fourth", videoUrl: "", date: new Date(2024, 3, 12) },
    { thumbnail: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA0OTI3Nw&ixlib=rb-1.2.1&q=80&w=400', category: "web", thumbnailCaption: "fourth", videoUrl: "", date: new Date(2024, 6, 12) },
  ];
  sortedVideos: Array<{ thumbnail: string, category: string, thumbnailCaption: string, videoUrl: string, date: Date }> = [];

  ngOnInit() {
    this.sortedVideos = [...this.videos]; // Initialize sortedVideos with the original array
    this.filterItems();
  }

  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number | any;
  currentFilter: string = '*';

  paginatedVideos: Array<{ thumbnail: string, category: string, thumbnailCaption: string, videoUrl: string, date: Date }> = [];

  filterItems() {
    if (this.currentFilter === '*') {
      this.sortedVideos = [...this.videos]; // Reset sortedVideos to original videos array
    } else {
      this.sortedVideos = this.videos.filter(item => item.category === this.currentFilter);
    }
    this.sortVideos('date'); // Apply default sorting after filtering
    this.paginateItems(); // Apply pagination after filtering and sorting
  }

  sortVideos(criteria: string) {
    let sortedArray: Array<{ thumbnail: string, category: string, thumbnailCaption: string, videoUrl: string, date: Date }> = [];

    if (criteria === 'title') {
      sortedArray = [...this.sortedVideos].sort((a, b) => a.thumbnailCaption.localeCompare(b.thumbnailCaption));
    } else if (criteria === 'date') {
      sortedArray = [...this.sortedVideos].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else {
      sortedArray = [...this.sortedVideos]; // Fallback to the original array if criteria is not recognized
    }

    this.sortedVideos = sortedArray;
    this.paginateItems(); // Reapply pagination after sorting
  }

  paginateItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedVideos = this.sortedVideos.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.paginateItems(); // Update pagination when changing pages
  }

  changeFilter(filter: string) {
    this.currentFilter = filter;
    this.currentPage = 1; // Reset page to 1 when changing filters
    this.filterItems(); // Apply filtering and sorting when changing filters
  }

  onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.sortVideos(value);
  }

  @ViewChildren('videoRef') videoElements: QueryList<ElementRef> | undefined;

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