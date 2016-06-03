import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AnotherComponent} from './another.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <courses></courses>
        <names></names>

    `,
    directives:[CoursesComponent, AnotherComponent]
})
export class AppComponent { }
