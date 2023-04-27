import { Component, Input } from '@angular/core';
import { ColorComponent } from 'src/theme/model/modelo.model';

@Component({
  selector: 'Mat-tabs',
  template: `<mat-tab-group [ngClass]="colors">
    <mat-tab label="First">Content 1</mat-tab>
    <mat-tab label="Second">Content 2</mat-tab>
    <mat-tab label="Third">Content 3</mat-tab>
  </mat-tab-group> `,
})
export class MatTabsComponent {
  
  @Input() color: string = ColorComponent.primary;

  public get colors(): string[] {
    return [`tabs-${this.color}`];
  }
}
