import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Child3Component } from "../child3/child3.component";

@Component({
  selector: 'app-parent3',
  template: `
    Message: {{ message }}
    <app-child3></app-child3>
  `,
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements AfterViewInit {

  @ViewChild(Child3Component) child;

  constructor() { }

  message:string;

  ngAfterViewInit() {
    this.message = this.child.message
  }
}
