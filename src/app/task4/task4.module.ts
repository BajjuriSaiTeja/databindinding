import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [Child1Component, Child2Component, Child3Component],
  exports:[Child1Component, Child2Component, Child3Component]
})
export class Task4Module { }
