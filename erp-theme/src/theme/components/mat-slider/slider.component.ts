import { Component, Input } from '@angular/core';
import { ColorComponent, Sizes } from 'src/theme/model/modelo.model';

@Component({
  selector: 'Mat-slider',
  template: `<mat-slider [ngClass]="sizes"
    ><input matSliderThumb
  /></mat-slider>`,
})
export class SliderComponent {
  @Input() size: Sizes = "small";
  @Input() color: string = ColorComponent.primary;
  public get sizes(): string[] {
    return [`${this.size}`, `mat-${this.color}`];
  }
}
