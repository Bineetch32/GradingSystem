import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Module1Module } from './mod/module1/module1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,Module1Module,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
