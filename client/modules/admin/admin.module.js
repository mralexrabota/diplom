System.register(["@angular/core", "@angular/http", "ng-semantic", "@angular/platform-browser", "./admin.component", "../teacher/teacher.module", "../subject/subject.module", "./admin.routing"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, ng_semantic_1, platform_browser_1, admin_component_1, teacher_module_1, subject_module_1, admin_routing_1, AdminModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (teacher_module_1_1) {
                teacher_module_1 = teacher_module_1_1;
            },
            function (subject_module_1_1) {
                subject_module_1 = subject_module_1_1;
            },
            function (admin_routing_1_1) {
                admin_routing_1 = admin_routing_1_1;
            }
        ],
        execute: function () {
            AdminModule = (function () {
                function AdminModule() {
                }
                return AdminModule;
            }());
            AdminModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule,
                        ng_semantic_1.NgSemanticModule,
                        admin_routing_1.routing,
                        teacher_module_1.TeacherModule,
                        subject_module_1.SubjectModule
                    ],
                    declarations: [
                        admin_component_1.AdminComponent
                    ],
                    bootstrap: [
                        admin_component_1.AdminComponent
                    ],
                    schemas: [
                        core_1.CUSTOM_ELEMENTS_SCHEMA
                    ]
                }),
                __metadata("design:paramtypes", [])
            ], AdminModule);
            exports_1("AdminModule", AdminModule);
        }
    };
});
//# sourceMappingURL=admin.module.js.map