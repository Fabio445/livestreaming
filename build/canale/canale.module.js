"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanaleModule = void 0;
var common_1 = require("@nestjs/common");
var canale_service_1 = require("./canale.service");
var canale_controller_1 = require("./canale.controller");
var CanaleModule = /** @class */ (function () {
    function CanaleModule() {
    }
    CanaleModule = __decorate([
        (0, common_1.Module)({
            controllers: [canale_controller_1.CanaleController],
            providers: [canale_service_1.CanaleService],
        })
    ], CanaleModule);
    return CanaleModule;
}());
exports.CanaleModule = CanaleModule;
//# sourceMappingURL=canale.module.js.map