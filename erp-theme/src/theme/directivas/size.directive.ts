import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { Size } from '../model/modelo.model';

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
