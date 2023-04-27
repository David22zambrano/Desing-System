import { Component, Input } from "@angular/core";
import { ColorComponent, Sizes } from "src/theme/model/modelo.model";

@Component({
  selector: 'Mat-fab',
  template: `<button [ngClass]="sizes" mat-fab><mat-icon>favorite</mat-icon></button>
  <button [ngClass]="sizes" extended mat-fab>Custom<mat-icon>favorite</mat-icon></button>`
})
export class FabComponent {
  @Input() size:Sizes = "small";
  @Input() label!: string;
  @Input() color=  "primary";

  public get sizes(): string[] {
    return [`${this.size}`, `button-${this.color}`];
  }
}
