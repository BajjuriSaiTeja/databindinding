import { Component} from '@angular/core';

@Component({
  selector: 'app-child3',
  template: `
  `,
  styleUrls: ['./child3.component.css']
})
export class Child3Component {

  message = 'I am message sent from child to parent!';

  constructor() { }

}