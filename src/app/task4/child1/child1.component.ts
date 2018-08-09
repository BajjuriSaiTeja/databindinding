import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-child1",
  template: `<h1>hi</h1>
  <p>Message: {{ message }}
  <app-child2 [child2message]="child1message"></app-child2></p>
  `,
  styleUrls: ["./child1.component.css"]
})
export class Child1Component implements OnInit {
  message = "i am child 1 sending info to child 2";
  child1message="message from child 1 to child 3";
  constructor() {}
  ngOnInit() {}
}
