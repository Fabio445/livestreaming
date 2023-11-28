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
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PortafoglioService } from './portafoglio.service';
import { CreatePortafoglioDto } from './dto/create-portafoglio.dto';
import { UpdatePortafoglioDto } from './dto/update-portafoglio.dto';
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
        Post(),
        __param(0, Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CreatePortafoglioDto]),
        __metadata("design:returntype", void 0)
    ], PortafoglioController.prototype, "create", null);
    __decorate([
        Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PortafoglioController.prototype, "findAll", null);
    __decorate([
        Get(':id'),
        __param(0, Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PortafoglioController.prototype, "findOne", null);
    __decorate([
        Patch(':id'),
        __param(0, Param('id')),
        __param(1, Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, UpdatePortafoglioDto]),
        __metadata("design:returntype", void 0)
    ], PortafoglioController.prototype, "update", null);
    __decorate([
        Delete(':id'),
        __param(0, Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PortafoglioController.prototype, "remove", null);
    PortafoglioController = __decorate([
        Controller('portafoglio'),
        __metadata("design:paramtypes", [PortafoglioService])
    ], PortafoglioController);
    return PortafoglioController;
}());
export { PortafoglioController };
//# sourceMappingURL=portafoglio.controller.js.map