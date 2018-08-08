import { Component, OnInit,Input } from "@angular/core";

@Component({
  selector: "app-outputcomponent",
  template: " Say {{childMessage}}",
  styleUrls: ["./outputcomponent.component.css"]
})
export class OutputcomponentComponent implements OnInit {
  constructor() {}
  @Input() childMessage:string;
  ngOnInit() {}
}
