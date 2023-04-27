import { Component, Input } from '@angular/core';
import { Sizes } from 'src/theme/model/modelo.model';

@Component({
  selector: 'button-toggle-group',
  template: `<mat-button-toggle-group [ngClass]="sizes">
    <mat-button-toggle value="red">Red</mat-button-toggle>
    <mat-button-toggle value="green">Green</mat-button-toggle>
    <mat-button-toggle value="blue">Blue</mat-button-toggle>
  </mat-button-toggle-group>`,
})
export class TogglebuttonComponent {
  @Input() size: Sizes = "small";

  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
