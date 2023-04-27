import { Component, Input } from '@angular/core';
import { Sizes } from 'src/theme/model/modelo.model';
@Component({
  selector: 'Mat-list',
  template: `<mat-list role="list" [ngClass]="sizes">
    <mat-list-item role="listitem">Item 1</mat-list-item>
    <mat-list-item role="listitem">Item 2</mat-list-item>
    <mat-list-item role="listitem">Item 3</mat-list-item>
  </mat-list>`,
})
export class MatListComponent {
  @Input() size: Sizes = "small";

  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
