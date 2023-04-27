import { Component, Input } from '@angular/core';
import { ColorComponent, Sizes } from 'src/theme/model/modelo.model';
@Component({
  selector: 'radio-button',
  template: `<mat-radio-button [ngClass]="sizes">Option</mat-radio-button> `,
})
export class RadioButtonComponent {
  @Input() size: Sizes = "small";
  @Input() color: string = ColorComponent.primary

  public get sizes(): string[] {
    return [`${this.size}`,`radio-${this.color}`];
  }
}
