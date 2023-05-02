import { Directive, ElementRef, Input,OnInit } from '@angular/core';
import { Size                                } from '@sinco/angular';          
import { Variants                            } from '../model/modelo.model';

@Directive({
  selector: 'mat-avatar,avatar,div[variant]',
})
export class AvatarDirective implements OnInit{
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input()
  avatar: Variants = 'circular';
  @Input()
  size: Size = 'small';

  ngOnInit(): void {
    this.el.nativeElement.classList.add(
      `matAvatar--${this.avatar}`,
      `${this.size}`
    );
  }
}
