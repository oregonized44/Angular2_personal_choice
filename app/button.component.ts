import {Component} from 'angular2/core';

@Component({
    selector:"help",
    template:`
    <button
        (click)="onClick($event)"
        class="btn btn-primary"
        [style.backgroundColor]="isActive ? 'orange' : 'blue'"
        [style.borderColor] = "isActive ? 'orange' : 'blue'"
    >Submit</button>
    `
})

export class ButtonComponent{
  onClick($event){
    this.isActive= !this.isActive;
  }

  isActive= false;

}
