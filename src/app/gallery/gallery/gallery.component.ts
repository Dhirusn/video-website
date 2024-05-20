import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  items = [
    { src: 'https://picsum.photos/id/1/200/300', title: 'SAQ INSPIRE', client: 'SAQ', category: 'art' },
    { src: 'https://picsum.photos/id/1/200/300', title: 'COMMERCIAL TITLE', client: 'CLIENT NAME', category: 'commercial' },
    // Add more items as needed
  ];

  displayedItems = this.items;

  ngOnInit() {
    window.addEventListener('filterCategory', (event: any) => {
      this.filterItems(event.detail);
    });
  }

  filterItems(category: string) {
    this.displayedItems = category === 'all' ? this.items : this.items.filter(item => item.category === category);
  }
}