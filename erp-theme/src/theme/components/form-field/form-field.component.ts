import { Component, Input } from '@angular/core';
import { Apparance, Sizes } from 'src/theme/model/modelo.model';

@Component({
  selector: 'app-form-field',
  template: `<mat-form-field [appearance]="appearance" [ngClass]="sizes">
  <mat-label>Fill form field</mat-label>
  <input matInput placeholder="Placeholder" />
  <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
</mat-form-field>
<mat-form-field [appearance]="appearance" [ngClass]="sizes">
  <mat-label>Fill form field</mat-label>
  <input matInput placeholder="Placeholder" />
</mat-form-field>
`,
})
export class FormFieldComponent {
  @Input() size: Sizes = "small";
  @Input() appearance!: Apparance

  public get Appearance(): string[] {
    return [`${this.appearance}`];
  }
  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
