import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-slider',
  template: `<mat-slider [ngClass]="sizes"
    ><input matSliderThumb
  /></mat-slider>`,
})
export class SliderComponent {
  @Input() size!: string;
  @Input() color!: string;
  public get sizes(): string[] {
    return [`${this.size}`, `slider--${this.color}`];
  }
}
