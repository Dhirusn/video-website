import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 900,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  slidesStore = [
    {
      id: 1,
      title: 'What Makes Users Want to Share a Video on Social Media?',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description: 'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#'
    },
    {
      id: 2,
      title: 'Bumper Ads: How to Tell a Story in 6 Seconds',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description: 'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#'
    },
    {
      id: 3,
      title: 'What Makes Users Want to Share a Video on Social Media?',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description: 'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#'
    },
    {
      id: 4,
      title: 'Bumper Ads: How to Tell a Story in 6 Seconds',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description: 'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#'
    },
    {
      id: 5,
      title: 'What Makes Users Want to Share a Video on Social Media?',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description: 'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#'
    },
    {
      id: 6,
      title: 'What Makes Users Want to Share a Video on Social Media?',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description: 'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#'
    },
    {
      id: 7,
      title: 'What Makes Users Want to Share a Video on Social Media?',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description: 'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#'
    }
  ];
}
