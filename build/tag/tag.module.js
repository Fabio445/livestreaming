"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagModule = void 0;
var common_1 = require("@nestjs/common");
var tag_service_1 = require("./tag.service");
var tag_controller_1 = require("./tag.controller");
var TagModule = /** @class */ (function () {
    function TagModule() {
    }
    TagModule = __decorate([
        (0, common_1.Module)({
            controllers: [tag_controller_1.TagController],
            providers: [tag_service_1.TagService],
        })
    ], TagModule);
    return TagModule;
}());
exports.TagModule = TagModule;
//# sourceMappingURL=tag.module.js.map