import {Directive, ElementRef, Renderer} from 'angular2/core' //

@Directive({
    selector: '[autoGrow]', //css selector for host element, if element has this attribute his attribute will be applied
    host: {                  //subscribes to events raised from this element
        '(focus)': 'onFocus()', //binds method to event
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer){ //we need a way to access the host element so we need elementref & renderer
    }                                                //elementref accesses the host element
                                                     //renderer modifies the element
    onFocus(){
      this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur(){
      this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }
}
