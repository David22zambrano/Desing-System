import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarDirective } from './avatar.directive';
import { SizeDirective } from './size.directive';
import { StandardDirective } from './standard.directive';
import { OrientationDirective } from './orientation.directive';

const directivas = [
  AvatarDirective,
  SizeDirective,
  StandardDirective,
  OrientationDirective
];

@NgModule({
  declarations: [directivas],
  imports: [CommonModule,directivas],
  exports: [directivas]
})
export class DirectivesModule { }
