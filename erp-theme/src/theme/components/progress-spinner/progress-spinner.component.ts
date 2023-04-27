import { Component, Input } from '@angular/core';
import { ColorComponent } from 'src/theme/model/modelo.model';

@Component({
  selector: 'Mat-progress-spinner',
  template: `<mat-spinner [ngClass]="colors"></mat-spinner> `,
})
export class ProgressSpinnerComponent {
  @Input()
  color: string = ColorComponent.primary
    ;

  public get colors(): string[] {
    return [`spinner-${this.color}`];
  }
}
