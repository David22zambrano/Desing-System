import { Component, Input } from '@angular/core';
import { Sizes } from 'src/theme/model/modelo.model';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
];
@Component({
  selector: 'Mat-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  @Input() size: Sizes = "small";

  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
