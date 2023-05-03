import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/theme/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarComponent } from 'src/theme/components/mat-avatar/avatar.component';
@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
