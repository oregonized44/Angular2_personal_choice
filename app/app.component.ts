import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AnotherComponent} from './another.component';
import {FavoriteComponent} from './favorite.component';
import {ButtonComponent} from './button.component'


@Component({
    selector: 'my-app',
    template: `

      <h1>Hello Angular</h1>
      <courses></courses>
      <names></names>
      <help></help>
      <favorite [is-favorite]="post.isFavorite" (changed)="onFavoriteChange($event)"></favorite>
    `,

    directives:[CoursesComponent, AnotherComponent, FavoriteComponent, ButtonComponent] //specifies any directives or any components we have used in the template
})                                                  // directives dont have templates!
export class AppComponent {
  post = {
      title: "title",
      isFavorite: true
  }
  onFavoriteChange($event){
    console.log($event);
  }
 } //root component
