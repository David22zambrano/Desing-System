import { Component, Input } from '@angular/core';
import { ColorComponent, Sizes } from 'src/theme/model/modelo.model';
@Component({
  selector: 'Mat-checkbox',
  template: `<mat-checkbox [ngClass]="custom"></mat-checkbox>`,
})
export class CheckboxComponent {
  @Input() size: Sizes = "small";
  @Input() color: string = ColorComponent.primary;

  public get custom(): string[] {
    return [`${this.size}`, `mat-${this.color}`];
  }
}
