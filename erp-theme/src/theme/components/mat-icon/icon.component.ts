import { Component, Input } from '@angular/core';
import { ColorComponent, Sizes } from 'src/theme/model/modelo.model';

@Component({
  selector: 'Mat-icon',
  template: `<mat-icon class="material-icons-outlined" [ngClass]="sizes">home</mat-icon>
  <mat-icon  [ngClass]="sizes">home</mat-icon>
  <mat-icon  class="material-icons-two-tone" [ngClass]="sizes">home</mat-icon> `,
})
export class IconComponents {
  @Input() size!: Sizes;
  @Input() color: string = ColorComponent.primary;

  public get sizes(): string[] {
    return [`${this.size}`, `mat-${this.color}`];
  }
}
