import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeDirective } from './size.directive';
import { StandardDirective } from './standard.directive';
import { OrientationDirective } from './orientation.directive';
import { AvatarDirective } from './avatar.directive';

const directivas = [
  SizeDirective,
  StandardDirective,
  OrientationDirective,
  AvatarDirective,
]; 
@NgModule({
  declarations: [directivas],
  imports: [
    CommonModule
  ],
  exports: [directivas]
})
export class DirectivesModule { }
