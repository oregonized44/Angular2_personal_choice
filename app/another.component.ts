import{Component} from 'angular2/core';
import {AnotherService} from './another.service';

@Component({
  selector:'names',
  template:`
    <h2>Names</h2>
      {{title}}
      <ul>
        <li *ngFor="#name of names">
          {{name}}
        </li>
      </ul>
  `,
  providers:[AnotherService]
})
export class AnotherComponent {
  title = "These are my homies";
  names: string[];

constructor(anotherService: AnotherService){
    this.names = anotherService.getNames();
  }
}
