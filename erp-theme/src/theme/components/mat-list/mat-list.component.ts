import { Component, Input } from '@angular/core';
@Component({
  selector: 'Mat-list',
  template: `<mat-list role="list" [ngClass]="sizes">
    <mat-list-item role="listitem">Item 1</mat-list-item>
    <mat-list-item role="listitem">Item 2</mat-list-item>
    <mat-list-item role="listitem">Item 3</mat-list-item>
  </mat-list>`,
})
export class MatListComponent {
  @Input() size!: string;

  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
