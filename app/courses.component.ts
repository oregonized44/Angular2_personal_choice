import {Component} from 'angular2/core' //decorator call component (functions)
import {CourseService} from './courses.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({ //decorator (this is a function that takes an object)
  selector:'courses', //attribute
  template:`
    <h2>Courses</h2>
    <input type = "text" [value]="title" (input)="title = $event.target.value" autoGrow />

    <ul>
      <li *ngFor="#course of courses">
        {{ course }}
      </li>
    </ul>

    <input type = "text" [(ngModel)] = "title"/>
    Preview:{{ title }}
  `,
  providers: [CourseService],
  directives:[AutoGrowDirective]

})
export class CoursesComponent {
  title = "The title of courses page";
  courses: string[];

  constructor(courseService: CourseService){ // is a referance to the Course Service decorator
    this.courses = courseService.getCourses();
  }
}
