import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'Mat-stepper',
  template: `<mat-stepper
    class="example-stepper"
    [orientation]="(stepperOrientation | async)!"
    [ngClass]="sizes"
  >
    <mat-step [stepControl]="firstFormGroup" label="Fill out your name">
      <form>
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input
            matInput
            placeholder="Last name, First name"
            formControlName="firstCtrl"
            required
          />
        </mat-form-field>
        <div>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup" label="Fill out your address">
      <form>
        <mat-form-field appearance="fill">
          <mat-label>Address</mat-label>
          <input
            matInput
            formControlName="secondCtrl"
            placeholder="Ex. 1 Main St, New York, NY"
            required
          />
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="thirdFormGroup" label="Fill out your phone number">
      <form>
        <mat-form-field appearance="fill">
          <mat-label>Phone number</mat-label>
          <input
            matInput
            formControlName="thirdCtrl"
            placeholder="Ex. 12345678"
            required
          />
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
  </mat-stepper>`,
})
export class StepperComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  @Input() color!: string;
  public get sizes(): string[] {
    return [`stepper--${this.color}`];
  }
}
