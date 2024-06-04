import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[data-setbg]'
})
export class SetBgDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const backgroundUrl = this.el.nativeElement.getAttribute('data-setbg');
    this.setBackground(backgroundUrl);
  }

  private setBackground(url: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', `url(${url})`);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundSize', 'cover');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundPosition', 'top center');
  }
}
