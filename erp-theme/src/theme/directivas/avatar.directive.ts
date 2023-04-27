import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Sizes, Variants } from '../model/modelo.model';

@Directive({
  selector: 'mat-avatar,avatar,div [avatar-component]',

})
export class AvatarDirective implements OnInit {
  constructor(private el: ElementRef<HTMLElement>) { }
  @Input() variant: Variants = "circular";
  @Input() size: Sizes = "small";

  ngOnInit(): void {
    this.el.nativeElement.classList.add(`${this.size}` || `${this.variant}`);

  }
}
