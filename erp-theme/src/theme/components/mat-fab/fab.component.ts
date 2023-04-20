import { Component, Input } from "@angular/core";
import { ColorsComponent, Size } from "src/theme/model/modelo.model";

@Component({
  selector: 'Mat-fab',
  template: `<button [ngClass]="sizes" mat-fab><mat-icon>favorite</mat-icon></button>
  <button [ngClass]="sizes" extended mat-fab>Custom<mat-icon>favorite</mat-icon></button>`
})
export class FabComponent {
  @Input() size:Size = "small";
  @Input() label!: string;
  @Input() color:ColorsComponent= "primary";

  public get sizes(): string[] {
    return [`${this.size}`, `button-${this.color}`];
  }
}
