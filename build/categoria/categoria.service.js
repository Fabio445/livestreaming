"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaService = void 0;
var common_1 = require("@nestjs/common");
var CategoriaService = /** @class */ (function () {
    function CategoriaService() {
    }
    CategoriaService.prototype.create = function (createCategoriaDto) {
        return 'This action adds a new categoria';
    };
    CategoriaService.prototype.findAll = function () {
        return "This action returns all categoria";
    };
    CategoriaService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " categoria");
    };
    CategoriaService.prototype.update = function (id, updateCategoriaDto) {
        return "This action updates a #".concat(id, " categoria");
    };
    CategoriaService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " categoria");
    };
    CategoriaService = __decorate([
        (0, common_1.Injectable)()
    ], CategoriaService);
    return CategoriaService;
}());
exports.CategoriaService = CategoriaService;
//# sourceMappingURL=categoria.service.js.map