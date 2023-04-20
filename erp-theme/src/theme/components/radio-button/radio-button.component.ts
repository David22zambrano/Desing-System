import { Component, Input } from '@angular/core';
@Component({
  selector: 'radio-button',
  template: `<mat-radio-button [ngClass]="sizes">Option</mat-radio-button> `,
})
export class RadioButtonComponent {
  @Input() size!: string;

  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
