import {Component, Input} from 'angular2/core';

@Component({
    selector: "heart",
    template:`
        <i class="glyphicon glyphicon-heart"
        [class.highlighted]="iLike"
        (click) = "onClick()">
        </i>
        <span>{{ likes }}</span>
    `
    styles: [`
      .glyphicon-heart {
          color: #ccc;
          cursor: pointer;
      }
      .highlighted {
          color:deeppink;
      }
    `]

})

export class HeartComponent{
  @Input('likes') likes = 0;
  @Input('like') iLike = false

  onClick(){
    this.iLike = !this.iLike;
    this.likes += this.iLike ? 1 : -1;
  }

}
