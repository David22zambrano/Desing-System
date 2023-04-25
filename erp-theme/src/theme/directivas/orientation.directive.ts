import { Directive, ElementRef, Input } from '@angular/core';
import { Variants } from '../model/modelo.model';

@Directive({
  selector: 'mat-tab-group,mat-button-toggle-group  [orientation]'
})
export class OrientationDirective {

  @Input() orientation!: Variants;
  constructor(private el: ElementRef<HTMLElement> ) { }

  ngAfterViewInit(): void {
     this.el.nativeElement.classList.add(this.orientation);
  }

}
