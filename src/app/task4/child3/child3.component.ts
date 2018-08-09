import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-3child",
  template: `<p>{{message}} {{child3message}}</p>`,
  styleUrls: ["./child3.component.css"]
})
export class Child3Component implements OnInit {
  message = "i am child3";
  @Input() child3message: string;
  constructor() {}
  ngOnInit() {}
}
