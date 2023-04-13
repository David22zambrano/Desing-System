import { Directive, ElementRef, Input } from '@angular/core';
import { Orientation } from '../modal/modelo.model';

@Directive({
  selector: 'mat-tab-group,mat-button-toggle-group  [orientation]'
})
export class OrientationDirective {

  @Input() orientation!: Orientation;
  constructor(private el: ElementRef<HTMLElement> ) { }

  ngAfterViewInit(): void {
     this.el.nativeElement.classList.add(this.orientation);    
  }

}
