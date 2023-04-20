import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { StandardDirective } from './directivas/standard.directive';
import { SizeDirective } from './directivas/size.directive';
import { OrientationDirective } from './directivas/orientation.directive';
import { AvatarDirective } from './directivas/avatar.directive';

import { MatAvatarComponent } from './components/Avatar/mat-avatar.component';
import { ClasesGlobalesComponent } from './components/Clases/clases-globales/clases-globales.component';
import { LayoutComponent } from './components/Clases/layoutt/layout.component';
import { IconComponent } from './components/Clases/icons/icon.component';
import { SpacingComponent } from './components/Clases/spacing/spacing.component';
import { ResponsiveComponent } from './components/Clases/responsive/responsive.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ColorsComponent } from './components/colors/colors.component';
import { ButtonComponent } from './components/mat-button/button.component';
import { FabComponent } from './components/mat-fab/fab.component';
import { IconButtonComponent } from './components/iconButon/iconButton.component';
import { MatChipComponent } from './components/mat-chip/mat-chip.component';
import { IconComponents } from './components/mat-icon/icon.component';
import { MatListComponent } from './components/mat-list/mat-list.component';
import { SlideToggleComponent } from './components/mat-slide-toggle/slide-toggle.component'
import { SliderComponent } from './components/mat-slider/slider.component';
import { StepperComponent } from './components/mat-stepper/stepper.component';
import { MatTabsComponent } from './components/mat-tabs/mat-tabs.component';
import { TogglebuttonComponent } from './components/mat-toggle-button/togglebutton.component';
import { ToolbarComponent } from './components/mat-toolbar/toolbar.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { TableComponent } from './components/table/table.component';
import { TipografiaComponent } from './components/tipografia/tipografia.component';
import { MatMenuComponent } from './components/menu/menu.component';

const modulesMaterial = [
  CommonModule,
  MatExpansionModule,
  MatTableModule,
  MatListModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatBadgeModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatDividerModule,
  MatSelectModule,
  MatDatepickerModule,
  MatRippleModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatCardModule,
  MatDialogModule
];
const directivas = [
  AvatarDirective,
  SizeDirective,
  StandardDirective,
  OrientationDirective
];

@NgModule({
  declarations: [
    MatMenuComponent,
    TipografiaComponent,
    TableComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    ToolbarComponent,
    StepperComponent,
    MatTabsComponent,
    TogglebuttonComponent,
    SliderComponent,
    ColorsComponent,
    ClasesGlobalesComponent,
    MatAvatarComponent,
    LayoutComponent,
    IconComponent,
    SpacingComponent,
    ResponsiveComponent,
    CheckboxComponent,
    ButtonComponent,
    FabComponent,
    IconButtonComponent,
    MatChipComponent,
    IconComponents,
    MatListComponent,
    SlideToggleComponent,

    directivas,

  ],
  imports: [
    modulesMaterial,
  ],
  exports: [
    modulesMaterial,
    directivas,

  ],
})
export class MaterialModule { }
