import { Component, ElementRef, Input, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mat-star-rating',
  templateUrl: "./rating.component.html",
  styleUrls: ['./rating.component.scss'],
})
export class StarRatingComponent {

  @Input() defaultValue!: Number;
  @Input() max!: Number;
  @Input() name!: String;
  Render: Array<number> = [];

  @ViewChildren('rating_input') Inputs!: QueryList<ElementRef>;

  ngOnInit() {
    this.Render = [...Array(this.max).keys()]
  }

  ngAfterViewInit() {
    this.Inputs.toArray().find(element => element.nativeElement.defaultValue == this.defaultValue)!.nativeElement.checked = true
  }

}
