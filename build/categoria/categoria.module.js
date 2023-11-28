"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaModule = void 0;
var common_1 = require("@nestjs/common");
var categoria_service_1 = require("./categoria.service");
var categoria_controller_1 = require("./categoria.controller");
var CategoriaModule = /** @class */ (function () {
    function CategoriaModule() {
    }
    CategoriaModule = __decorate([
        (0, common_1.Module)({
            controllers: [categoria_controller_1.CategoriaController],
            providers: [categoria_service_1.CategoriaService],
        })
    ], CategoriaModule);
    return CategoriaModule;
}());
exports.CategoriaModule = CategoriaModule;
//# sourceMappingURL=categoria.module.js.map