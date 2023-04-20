import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['../../../stylesStorybook/_clases.scss'],
})
export class LayoutComponent {
  @Input() items!: string;
  @Input() grid!: string;
  @Input() flex!: string;
  @Input() column!: string;
  @Input() justify!: string;

  public get custom(): string[] {
    return [
      `custom-${this.items}`,
      `custom-${this.grid}`,
      `custom-${this.flex}`,
      `custom-${this.column}`,
      `custom-${this.justify}`,
    ];
  }
}
