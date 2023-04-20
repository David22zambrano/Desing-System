import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-toggle-group',
  template: `<mat-button-toggle-group [ngClass]="sizes">
    <mat-button-toggle value="red">Red</mat-button-toggle>
    <mat-button-toggle value="green">Green</mat-button-toggle>
    <mat-button-toggle value="blue">Blue</mat-button-toggle>
  </mat-button-toggle-group>`,
})
export class TogglebuttonComponent {
  @Input() size!: string;

  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
