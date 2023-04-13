import { Directive, ElementRef, Input,OnInit } from '@angular/core';
import { Size                                } from '../modal/modelo.model';
import { avatarVariant                       } from '../modal/modelo.model';

@Directive({
  selector: 'mat-avatar,avatar,div[variant]',
})
export class AvatarDirective implements OnInit{
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input()
  avatar: avatarVariant = 'circular';

  @Input()
  size: Size = 'small';

  ngOnInit(): void {
    this.el.nativeElement.classList.add(
      `matAvatar--${this.avatar}`,
      `${this.size}`
    );
  }
}
