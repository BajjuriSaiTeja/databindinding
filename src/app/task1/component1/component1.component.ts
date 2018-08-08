import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.css"]
})
export class Component1Component implements OnInit {
  constructor() { }

  ngOnInit() {}
  textValue = "initial value";
  logo = "";

  logText(value: string): void {
    this.logo += `'${value}'`;
    console.log(value);
  }
}
