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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaController = void 0;
var common_1 = require("@nestjs/common");
var categoria_service_1 = require("./categoria.service");
var create_categoria_dto_1 = require("./dto/create-categoria.dto");
var update_categoria_dto_1 = require("./dto/update-categoria.dto");
var CategoriaController = /** @class */ (function () {
    function CategoriaController(categoriaService) {
        this.categoriaService = categoriaService;
    }
    CategoriaController.prototype.create = function (createCategoriaDto) {
        return this.categoriaService.create(createCategoriaDto);
    };
    CategoriaController.prototype.findAll = function () {
        return this.categoriaService.findAll();
    };
    CategoriaController.prototype.findOne = function (id) {
        return this.categoriaService.findOne(+id);
    };
    CategoriaController.prototype.update = function (id, updateCategoriaDto) {
        return this.categoriaService.update(+id, updateCategoriaDto);
    };
    CategoriaController.prototype.remove = function (id) {
        return this.categoriaService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_categoria_dto_1.CreateCategoriaDto]),
        __metadata("design:returntype", void 0)
    ], CategoriaController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CategoriaController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CategoriaController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_categoria_dto_1.UpdateCategoriaDto]),
        __metadata("design:returntype", void 0)
    ], CategoriaController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CategoriaController.prototype, "remove", null);
    CategoriaController = __decorate([
        (0, common_1.Controller)('categoria'),
        __metadata("design:paramtypes", [categoria_service_1.CategoriaService])
    ], CategoriaController);
    return CategoriaController;
}());
exports.CategoriaController = CategoriaController;
//# sourceMappingURL=categoria.controller.js.map