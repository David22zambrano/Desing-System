import { Component, Input } from '@angular/core';
import { ColorComponent, Sizes } from 'src/theme/model/modelo.model';

@Component({
  selector: 'Mat-slide-toggle',
  template: `<mat-slide-toggle [ngClass]="sizes">{{
    label
  }}</mat-slide-toggle> `,
})
export class SlideToggleComponent {
  @Input() size: Sizes = "small";
  @Input() label!: string;
  @Input() color: string = ColorComponent.primary;

  public get sizes(): string[] {
    return [`${this.size}`, `slide-${this.color}`];
  }
}
