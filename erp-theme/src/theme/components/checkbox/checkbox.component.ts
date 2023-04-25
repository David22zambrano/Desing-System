import { Component, Input } from '@angular/core';
import { Sizes } from 'src/theme/model/modelo.model';
@Component({
  selector: 'Mat-checkbox',
  template: `<mat-checkbox [ngClass]="custom"></mat-checkbox>`,
})
export class CheckboxComponent {
  @Input() size: Sizes = "small";
  @Input() color!: "accent";

  public get custom(): string[] {
    return [`${this.size}`, `color-${this.color}`];
  }
}
