System.register(['angular2/core', './courses.component', './another.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, another_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (another_component_1_1) {
                another_component_1 = another_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isActive = false;
                }
                AppComponent.prototype.onClick = function ($event) {
                    this.isActive = true;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <div>\n        <h1>Hello Angular</h1>\n        <courses></courses>\n        <names></names>\n      </div>\n      <button\n          (click)=\"onClick($event)\"\n          class=\"btn btn-primary\"\n          [style.backgroundColor]=\"isActive ? 'orange' : 'blue'\"\n          [style.borderColor] = \"isActive ? 'orange' : 'blue'\"\n      >Submit</button>\n    ",
                        directives: [courses_component_1.CoursesComponent, another_component_1.AnotherComponent] //specifies any directives or any components we have used in the template
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent); //root component
        }
    }
});
//# sourceMappingURL=app.component.js.map