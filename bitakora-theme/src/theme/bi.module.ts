import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule              } from '@angular/material/button';
import { MatProgressBarModule         } from '@angular/material/progress-bar';
import { MatChipsModule               } from '@angular/material/chips';
import { MatToolbarModule             } from '@angular/material/toolbar';
import { MatProgressSpinnerModule     } from '@angular/material/progress-spinner';
import { MatSliderModule              } from '@angular/material/slider';
import { MatBadgeModule               } from '@angular/material/badge';
import { MatSlideToggleModule         } from '@angular/material/slide-toggle';
import { MatStepperModule             } from '@angular/material/stepper';
import { MatInputModule               } from '@angular/material/input';
import { MatSnackBarModule            } from '@angular/material/snack-bar';
import { MatIconModule                } from '@angular/material/icon';
import { MatTabsModule                } from '@angular/material/tabs';
import { MatCheckboxModule            } from '@angular/material/checkbox';
import { MatRadioModule               } from '@angular/material/radio';
import { MatDividerModule             } from '@angular/material/divider';
import { MatFormFieldModule           } from '@angular/material/form-field';
import { MatSelectModule              } from '@angular/material/select';
import { MatDatepickerModule          } from '@angular/material/datepicker';
import { MatListModule                } from '@angular/material/list';
import { MatMenuModule                } from '@angular/material/menu';
import { MatButtonToggleModule        } from '@angular/material/button-toggle';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatAutocompleteModule        } from '@angular/material/autocomplete';
import { MatTableModule               } from '@angular/material/table';
import { MatExpansionModule           } from '@angular/material/expansion';
import { MatCardModule                } from '@angular/material/card';
import { MatDialogModule              } from '@angular/material/dialog';
import { SizeDirective                } from './directivas/size.directive';
import { StandardDirective            } from './directivas/standard.directive';
import { OrientationDirective         } from './directivas/orientation.directive';

const components = [
  MatExpansionModule,
  MatTableModule,
  MatListModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatAutocompleteModule,
  CommonModule,
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

@NgModule({
  declarations: [
    SizeDirective,
    StandardDirective,
    OrientationDirective
  ],
  imports: [components],
  exports: [
    components,
    SizeDirective,
    StandardDirective,
    OrientationDirective
  ]
})
export class ErpModule { }
