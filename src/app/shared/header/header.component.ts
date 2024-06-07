import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) { // Adjust this value as needed
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
