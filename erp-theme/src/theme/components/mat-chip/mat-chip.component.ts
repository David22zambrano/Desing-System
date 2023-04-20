import { Component, Input } from '@angular/core';
import { Size } from 'src/theme/model/modelo.model';

@Component({
  selector: 'Mat-chip',
  template: `<mat-chip color="primary" [ngClass]="sizes">{{
    label
  }}</mat-chip>`,
})
export class MatChipComponent {
  @Input() size:Size = "small";
  @Input() label!: string;
  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
