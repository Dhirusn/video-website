import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[dataSetbg]'
})
export class SetBgDirective implements OnChanges {
  @Input('dataSetbg') backgroundUrl: string | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['backgroundUrl']) {
      this.setBackground(this.backgroundUrl!);
    }
  }

  private setBackground(url: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', `url(${url})`);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundSize', 'cover');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundPosition', 'top center');
    this.renderer.setStyle(this.el.nativeElement, 'background-repeat', 'no-repeat');
  }
}
