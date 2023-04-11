import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

export type Size = 'small' | 'medium' | 'large';

@Directive({
  selector: `[size]`,
})
export class SizeDirective implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input() size!: Size;
  ngOnChanges() {
    this.el.nativeElement.classList.add(this.size);
  }
}
