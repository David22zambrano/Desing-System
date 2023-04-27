import { Component, Input } from '@angular/core';
import { Sizes } from 'src/theme/model/modelo.model';

@Component({
  selector: 'Mat-chip',
  template: `<mat-chip  [ngClass]="sizes">{{
    label
  }}</mat-chip>`,
})
export class MatChipComponent {
  @Input() size: Sizes = "small";
  @Input() label!: string;
  
  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
