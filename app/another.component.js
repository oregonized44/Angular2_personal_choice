System.register(['angular2/core', './another.service'], function(exports_1, context_1) {
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
    var core_1, another_service_1;
    var AnotherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (another_service_1_1) {
                another_service_1 = another_service_1_1;
            }],
        execute: function() {
            AnotherComponent = (function () {
                function AnotherComponent(anotherService) {
                    this.title = "These are my homies";
                    this.names = anotherService.getNames();
                }
                AnotherComponent = __decorate([
                    core_1.Component({
                        selector: 'names',
                        template: "\n    <h2>Names</h2>\n      {{title}}\n      <br>\n      <ul>\n        <li *ngFor=\"#name of names\">\n          {{ name }}\n        </li>\n      </ul>\n  ",
                        providers: [another_service_1.AnotherService]
                    }), 
                    __metadata('design:paramtypes', [another_service_1.AnotherService])
                ], AnotherComponent);
                return AnotherComponent;
            }());
            exports_1("AnotherComponent", AnotherComponent);
        }
    }
});
//# sourceMappingURL=another.component.js.map