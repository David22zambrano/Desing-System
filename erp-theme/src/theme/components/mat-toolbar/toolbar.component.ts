import { Component, Input } from '@angular/core';
import { ColorComponent } from 'src/theme/model/modelo.model';

@Component({
  selector: 'Mat-toolbar',
  template: ` <mat-toolbar [ngClass]="sizes" >
    <button
      mat-icon-button
      class="example-icon"
      aria-label="Example icon-button with menu icon"
    >
      <mat-icon>menu</mat-icon>
    </button>
    <span style="font-size: 20px;"> Toolbar</span>
    <span class="example-spacer"></span>
    <button
      mat-icon-button
      class="example-icon favorite-icon"
      aria-label="Example icon-button with heart icon"
    >
      <mat-icon>favorite</mat-icon>
    </button>
    <button
      mat-icon-button
      class="example-icon"
      aria-label="Example icon-button with share icon"
    >
      <mat-icon>share</mat-icon>
    </button>
  </mat-toolbar>`,
})
export class ToolbarComponent {
  @Input() color: string = ColorComponent.primary;

  public get sizes(): string[] {
    return [`toolbar-${this.color}`];
  }
}
