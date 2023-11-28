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
exports.CanaleController = void 0;
var common_1 = require("@nestjs/common");
var canale_service_1 = require("./canale.service");
var create_canale_dto_1 = require("./dto/create-canale.dto");
var update_canale_dto_1 = require("./dto/update-canale.dto");
var CanaleController = /** @class */ (function () {
    function CanaleController(canaleService) {
        this.canaleService = canaleService;
    }
    CanaleController.prototype.create = function (createCanaleDto) {
        return this.canaleService.create(createCanaleDto);
    };
    CanaleController.prototype.findAll = function () {
        return this.canaleService.findAll();
    };
    CanaleController.prototype.findOne = function (id) {
        return this.canaleService.findOne(+id);
    };
    CanaleController.prototype.update = function (id, updateCanaleDto) {
        return this.canaleService.update(+id, updateCanaleDto);
    };
    CanaleController.prototype.remove = function (id) {
        return this.canaleService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_canale_dto_1.CreateCanaleDto]),
        __metadata("design:returntype", void 0)
    ], CanaleController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CanaleController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CanaleController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_canale_dto_1.UpdateCanaleDto]),
        __metadata("design:returntype", void 0)
    ], CanaleController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CanaleController.prototype, "remove", null);
    CanaleController = __decorate([
        (0, common_1.Controller)('canale'),
        __metadata("design:paramtypes", [canale_service_1.CanaleService])
    ], CanaleController);
    return CanaleController;
}());
exports.CanaleController = CanaleController;
//# sourceMappingURL=canale.controller.js.map