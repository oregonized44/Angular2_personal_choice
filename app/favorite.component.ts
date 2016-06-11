import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: "favorite",
    template:`
        <i
          class="glyphicon"
          [class.glyphicon-star] = "isFavorite"
          [class.glyphicon-star-empty] = "!isFavorite"
          (click) = "onClick()"
        ></i>
    `

})

export class FavoriteComponent{
    @Input('is-favorite') isFavorite = true;

    @Output('changed') change = new EventEmitter(); // used to publish events

    onClick(){
      this.isFavorite = !this.isFavorite;
      this.change.emit({
          newValue: this.isFavorite
      });
    }

}
