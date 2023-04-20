import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-progress-spinner',
  template: `<mat-spinner [ngClass]="colors"></mat-spinner> `,
})
export class ProgressSpinnerComponent {
  @Input()
  color!: string;

  public get colors(): string[] {
    return [`spinner-${this.color}`];
  }
}
