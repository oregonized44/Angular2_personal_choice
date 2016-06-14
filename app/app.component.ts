import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AnotherComponent} from './another.component';
import {FavoriteComponent} from './favorite.component';
import {ButtonComponent} from './button.component';
import {HeartComponent} from './heart.component';


@Component({
    selector: 'my-app',
    template: `

      <h1>Hello Angular</h1>
      <courses></courses>
      <names></names>
      <help></help>
      <favorite [is-favorite]="post.isFavorite" (changed)="onFavoriteChange($event)"></favorite>
      <heart [like]="tweet.like"[likes]="tweet.likes"></heart>
    `,

    directives:[CoursesComponent, AnotherComponent, FavoriteComponent, ButtonComponent, HeartComponent] //specifies any directives or any components we have used in the template
})                                                  // directives dont have templates!
export class AppComponent {
  post = {
      title: "title",
      isFavorite: true
  }
  tweet = {
      likes: 10,
      like: false

  }
  onFavoriteChange($event){
    console.log($event);
  }
 } //root component
