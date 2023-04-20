import { Component, Input } from '@angular/core';
import { ColorComponent, Size } from 'src/theme/model/modelo.model';
@Component({
  selector: 'Mat-checkbox',
  template: `<mat-checkbox [ngClass]="custom"></mat-checkbox>`,
})
export class CheckboxComponent {
  @Input()
  size: Size = "small";
  color: ColorComponent = 'accent';

  public get custom(): string[] {
    return [`${this.size}`, `color-${this.color}`];
  }
}
