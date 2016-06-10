import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AnotherComponent} from './another.component';

@Component({
    selector: 'my-app',
    template: `
      <div>
        <h1>Hello Angular</h1>
        <courses></courses>
        <names></names>
      </div>
      <button
          class="btn btn-primary"
          [style.backgroundColor]="isActive ? 'orange' : 'blue'"
          >Submit</button>
    `,

    directives:[CoursesComponent, AnotherComponent] //specifies any directives or any components we have used in the template
})                                                  // directives dont have templates!
export class AppComponent {
    isActive= false;
 } //root component
