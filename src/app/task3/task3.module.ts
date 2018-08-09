import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './child3/child3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Parent3Component, Child3Component],
  exports:[Parent3Component, Child3Component]
})
export class Task3Module { }