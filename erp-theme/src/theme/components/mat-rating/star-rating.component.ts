import { Component, ElementRef, Input, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mat-star-rating',
  template:`
    <div class="rating">
      <ng-container *ngFor="let item of Render.slice().reverse()" >
          <input #rating_input type="radio" id="{{name}}-{{item+1}}" name="{{name}}" value="{{item+1}}" />
          <label for="{{name}}-{{item+1}}"></label> 
      </ng-container>
    </div>
  `,
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {

  @Input()defaultValue!: Number;
  @Input()max!: Number;
  @Input()name!:String;
  Render: Array<number> = [];

  @ViewChildren('rating_input') Inputs!:QueryList<ElementRef>;

  ngOnInit() {
    this.Render = [...Array(this.max).keys()]
  }
  
  ngAfterViewInit() {
    this.Inputs.toArray().find(element => element.nativeElement.defaultValue == this.defaultValue)!.nativeElement.checked = true
  }
 
}
