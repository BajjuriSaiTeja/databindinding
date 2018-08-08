import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inputcomponent',
  template: '<app-outputcomponent [childMessage]="parentMessage"></app-outputcomponent>',
  styleUrls: ['./inputcomponent.component.css']
})
export class InputcomponentComponent implements OnInit {

  constructor() { }
  parentMessage = "message from parent";
  ngOnInit() {
  }

}
