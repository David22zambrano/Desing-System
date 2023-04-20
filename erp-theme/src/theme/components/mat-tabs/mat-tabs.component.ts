import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-tabs',
  template: `<mat-tab-group [ngClass]="colors">
    <mat-tab label="First">Content 1</mat-tab>
    <mat-tab label="Second">Content 2</mat-tab>
    <mat-tab label="Third">Content 3</mat-tab>
  </mat-tab-group> `,
})
export class MatTabsComponent {
  @Input() color!: string;

  public get colors(): string[] {
    return [`tabs-${this.color}`];
  }
}
