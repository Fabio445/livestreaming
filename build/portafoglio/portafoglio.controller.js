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
exports.PortafoglioController = void 0;
var common_1 = require("@nestjs/common");
var portafoglio_service_1 = require("./portafoglio.service");
var create_portafoglio_dto_1 = require("./dto/create-portafoglio.dto");
var update_portafoglio_dto_1 = require("./dto/update-portafoglio.dto");
var PortafoglioController = /** @class */ (function () {
    function PortafoglioController(portafoglioService) {
        this.portafoglioService = portafoglioService;
    }
    PortafoglioController.prototype.create = function (createPortafoglioDto) {
        return this.portafoglioService.create(createPortafoglioDto);
    };
    PortafoglioController.prototype.findAll = function () {
        return this.portafoglioService.findAll();
    };
    PortafoglioController.prototype.findOne = function (id) {
        return this.portafoglioService.findOne(+id);
    };
    PortafoglioController.prototype.update = function (id, updatePortafoglioDto) {
        return this.portafoglioService.update(+id, updatePortafoglioDto);
    };
    PortafoglioController.prototype.remove = function (id) {
        return this.portafoglioService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_portafoglio_dto_1.CreatePortafoglioDto]),
        __metadata("design:returntype", void 0)
    ], PortafoglioController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PortafoglioController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PortafoglioController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_portafoglio_dto_1.UpdatePortafoglioDto]),
        __metadata("design:returntype", void 0)
    ], PortafoglioController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PortafoglioController.prototype, "remove", null);
    PortafoglioController = __decorate([
        (0, common_1.Controller)('portafoglio'),
        __metadata("design:paramtypes", [portafoglio_service_1.PortafoglioService])
    ], PortafoglioController);
    return PortafoglioController;
}());
exports.PortafoglioController = PortafoglioController;
//# sourceMappingURL=portafoglio.controller.js.map