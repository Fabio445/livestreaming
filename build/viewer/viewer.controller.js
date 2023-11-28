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
exports.ViewerController = void 0;
var common_1 = require("@nestjs/common");
var viewer_service_1 = require("./viewer.service");
var create_viewer_dto_1 = require("./dto/create-viewer.dto");
var update_viewer_dto_1 = require("./dto/update-viewer.dto");
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
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_viewer_dto_1.CreateViewerDto]),
        __metadata("design:returntype", void 0)
    ], ViewerController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ViewerController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ViewerController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_viewer_dto_1.UpdateViewerDto]),
        __metadata("design:returntype", void 0)
    ], ViewerController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ViewerController.prototype, "remove", null);
    ViewerController = __decorate([
        (0, common_1.Controller)('viewer'),
        __metadata("design:paramtypes", [viewer_service_1.ViewerService])
    ], ViewerController);
    return ViewerController;
}());
exports.ViewerController = ViewerController;
//# sourceMappingURL=viewer.controller.js.map