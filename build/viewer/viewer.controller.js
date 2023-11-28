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
import { ViewerService } from './viewer.service';
import { CreateViewerDto } from './dto/create-viewer.dto';
import { UpdateViewerDto } from './dto/update-viewer.dto';
var ViewerController = /** @class */ (function () {
    function ViewerController(viewerService) {
        this.viewerService = viewerService;
    }
    ViewerController.prototype.create = function (createViewerDto) {
        return this.viewerService.create(createViewerDto);
    };
    ViewerController.prototype.findAll = function () {
        return this.viewerService.findAll();
    };
    ViewerController.prototype.findOne = function (id) {
        return this.viewerService.findOne(+id);
    };
    ViewerController.prototype.update = function (id, updateViewerDto) {
        return this.viewerService.update(+id, updateViewerDto);
    };
    ViewerController.prototype.remove = function (id) {
        return this.viewerService.remove(+id);
    };
    __decorate([
        Post(),
        __param(0, Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CreateViewerDto]),
        __metadata("design:returntype", void 0)
    ], ViewerController.prototype, "create", null);
    __decorate([
        Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ViewerController.prototype, "findAll", null);
    __decorate([
        Get(':id'),
        __param(0, Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ViewerController.prototype, "findOne", null);
    __decorate([
        Patch(':id'),
        __param(0, Param('id')),
        __param(1, Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, UpdateViewerDto]),
        __metadata("design:returntype", void 0)
    ], ViewerController.prototype, "update", null);
    __decorate([
        Delete(':id'),
        __param(0, Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ViewerController.prototype, "remove", null);
    ViewerController = __decorate([
        Controller('viewer'),
        __metadata("design:paramtypes", [ViewerService])
    ], ViewerController);
    return ViewerController;
}());
export { ViewerController };
//# sourceMappingURL=viewer.controller.js.map