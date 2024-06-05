import { Component } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio-item';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
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
export class PortfolioComponent {
  items: PortfolioItem[] = [
    { category: 'branding', image: 'assets/img/portfolio/portfolio-1.jpg', title: 'VIP Auto Tires & Service', details: ['eCommerce', 'Magento'] },
    { category: 'digital-marketing', image: 'assets/img/portfolio/portfolio-2.jpg', title: 'VIP Auto Tires & Service', details: ['Photography'] },
    { category: 'web', image: 'assets/img/portfolio/portfolio-3.jpg', title: 'VIP Auto Tires & Service', details: ['eCommerce', 'Magento'] },
    { category: 'photography', image: 'assets/img/portfolio/portfolio-4.jpg', title: 'VIP Auto Tires & Service', details: ['eCommerce', 'Magento'] },
    { category: 'ecommerce', image: 'assets/img/portfolio/portfolio-5.jpg', title: 'VIP Auto Tires & Service', details: ['Photography'] },
    { category: 'branding', image: 'assets/img/portfolio/portfolio-6.jpg', title: 'VIP Auto Tires & Service', details: ['eCommerce', 'Magento'] },
    { category: 'web', image: 'assets/img/portfolio/portfolio-7.jpg', title: 'VIP Auto Tires & Service', details: ['eCommerce', 'Magento'] },
    { category: 'photography', image: 'assets/img/portfolio/portfolio-8.jpg', title: 'VIP Auto Tires & Service', details: ['Photography'] },
    { category: 'ecommerce', image: 'assets/img/portfolio/portfolio-9.jpg', title: 'VIP Auto Tires & Service', details: ['eCommerce', 'Magento'] },
  ];

  filteredItems: PortfolioItem[] | any;
  paginatedItems: PortfolioItem[] | any;
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number | any;
  currentFilter: string = '*';

  ngOnInit() {
    this.filterItems();
  }

  filterItems() {
    if (this.currentFilter === '*') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item => item.category === this.currentFilter);
    }
    this.totalPages = Math.ceil(this.filteredItems.length / this.itemsPerPage);
    this.paginateItems();
  }

  paginateItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedItems = this.filteredItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.paginateItems();
  }

  changeFilter(filter: string) {
    this.currentFilter = filter;
    this.currentPage = 1;
    this.filterItems();
  }
}
