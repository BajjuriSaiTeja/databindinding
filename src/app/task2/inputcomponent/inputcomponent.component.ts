import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inputcomponent',
  template: `<p>{{message}}</p>
  <app-outputcomponent [childMessage]="parentMessage"></app-outputcomponent>`,
  styleUrls: ['./inputcomponent.component.css']
})
export class InputcomponentComponent implements OnInit {

  constructor() { }
  message = "i am parent";
  parentMessage = "message from parent";
  ngOnInit() {
  }

}
