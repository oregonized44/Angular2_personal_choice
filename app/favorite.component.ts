import {Component} from 'angular2/core';

@Component({
    selector: "favorite",
    template:`
        <i
          class="glyphicon"
          [class.glyphicon-star] = "isActive"
          [class.glyphicon-star-empty] = "!isActive"
          (click) = "onClick()"
        ></i>
    `

})

export class FavoriteComponent{
    isActive = true;
    onClick(){
      this.isActive = !this.isActive;
      console.log("starclick");
    }

}
