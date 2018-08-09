import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child2",
  template: `<p>{{message}}
  <app-3child [child3message]="child2message"></app-3child></p>`,
  styleUrls: ["./child2.component.css"]
})
export class Child2Component implements OnInit {
  message ="message from child2";
  @Input() child2message :string;
  constructor() {}
  ngOnInit() {}
}
