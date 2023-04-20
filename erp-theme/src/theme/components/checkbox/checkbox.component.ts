import { Component, Input } from '@angular/core';
import { ColorsComponent, Size } from 'src/theme/model/modelo.model';
@Component({
  selector: 'Mat-checkbox',
  template: `<mat-checkbox [ngClass]="custom"></mat-checkbox>`,
})
export class CheckboxComponent {
  @Input()
  size: Size = "small";
  color: ColorsComponent = 'accent';

  public get custom(): string[] {
    return [`${this.size}`, `color-${this.color}`];
  }
}
