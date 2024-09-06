import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PortfolioItem, VideoDetail } from '../../models/portfolio-item';
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


  videos: Array<VideoDetail> = [
    { thumbnail: '../../../assets/img/portfolio/portfolio-1.jpg', category: "ecommerce", thumbnailCaption: "first", videoUrl: "", date: new Date(2024, 5, 12) },
    { thumbnail: '../../../assets/img/portfolio/portfolio-2.jpg', category: "ecommerce", thumbnailCaption: "second", videoUrl: "", date: new Date(2024, 5, 2) },
    { thumbnail: '../../../assets/img/portfolio/portfolio-3.jpg', category: "digital", thumbnailCaption: "third", videoUrl: "", date: new Date(2024, 1, 12) },
    { thumbnail: '../../../assets/img/portfolio/portfolio-4.jpg', category: "branding", thumbnailCaption: "fourth", videoUrl: "", date: new Date(2024, 2, 12) },
    { thumbnail: '../../../assets/img/portfolio/portfolio-5.jpg', category: "digital-marketing", thumbnailCaption: "fourth", videoUrl: "", date: new Date(2024, 3, 12) },
    { thumbnail: '../../../assets/img/portfolio/portfolio-6.jpg', category: "web", thumbnailCaption: "fourth", videoUrl: "", date: new Date(2024, 6, 12) },
  ];
  sortedVideos: Array<VideoDetail> = [];

  ngOnInit() {
    this.sortedVideos = [...this.videos]; // Initialize sortedVideos with the original array
    this.filterItems();
  }

  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number | any;
  currentFilter: string = '*';

  paginatedVideos: Array<VideoDetail> = [];

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
    let sortedArray: Array<VideoDetail> = [];

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