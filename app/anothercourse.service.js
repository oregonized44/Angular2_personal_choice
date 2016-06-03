System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AnotherService;
    return {
        setters:[],
        execute: function() {
            AnotherService = (function () {
                function AnotherService() {
                }
                AnotherService.prototype.getNames = function () {
                    return ["Connor", "Alex", "Jake", "Lindsey"];
                };
                return AnotherService;
            }());
            exports_1("AnotherService", AnotherService);
        }
    }
});
//# sourceMappingURL=anothercourse.service.js.map