import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-icon',
  template: `<mat-icon class="material-icons-outlined" [ngClass]="sizes">home</mat-icon>
  <mat-icon  [ngClass]="sizes">home</mat-icon>
  <mat-icon  class="material-icons-two-tone" [ngClass]="sizes">home</mat-icon> `,
})
export class IconComponents {
  @Input() size!: string;
  @Input() color!: string;

  public get sizes(): string[] {
    return [`${this.size}`, `mat-icon--${this.color}`];
  }
}
