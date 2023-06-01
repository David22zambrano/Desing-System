import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';


@Component({
  selector: 'mat-star-rating',
  template:`
      <div class="rating">
        <ng-container *ngFor="let item of Render.reverse()" >
          <input #rating_input type="radio" id="{{name}}-{{item}}" name="{{name}}" value="{{item}}" />
          <label [ngClass]="item %1 !== 0?'half':''" class="mat-icon-outlined" for="{{name}}-{{item}}"></label>
        </ng-container>
      </div>
`,  
  styleUrls: ['./mat-rating.component.scss'],
})
export class MatRatingComponent  {


  constructor(private el:ElementRef<HTMLElement>){}

  @Input() defaultValue!: number;
  @Input() max: number = 5;
  @Input() name: string = "";
  @Input() activeHalfStars: boolean = false;

  Render: Array<number> = [];

  @ViewChildren('rating_input') Inputs!:QueryList<ElementRef>;

  ngOnInit() {
    if(this.activeHalfStars == true){
      this.Render = Array.from({ length: this.max }, (_, i) => i + 1).reduce((accRating:number[], value:number) => {accRating.push(value - 0.5, value);
        return accRating}, [])
      }
    else{
      this.Render = [...Array(this.max).fill(0).map((e,index)=>index+1)
      ]      
    }
  }

  ngAfterViewInit(){
    this.Inputs.toArray().find(element => element.nativeElement.defaultValue == this.defaultValue)!.nativeElement.checked = true;
  }

}


