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
exports.LiveController = void 0;
var common_1 = require("@nestjs/common");
var live_service_1 = require("./live.service");
var create_live_dto_1 = require("./dto/create-live.dto");
var update_live_dto_1 = require("./dto/update-live.dto");
var LiveController = /** @class */ (function () {
    function LiveController(liveService) {
        this.liveService = liveService;
    }
    LiveController.prototype.create = function (createLiveDto) {
        return this.liveService.create(createLiveDto);
    };
    LiveController.prototype.findAll = function () {
        return this.liveService.findAll();
    };
    LiveController.prototype.findOne = function (id) {
        return this.liveService.findOne(+id);
    };
    LiveController.prototype.update = function (id, updateLiveDto) {
        return this.liveService.update(+id, updateLiveDto);
    };
    LiveController.prototype.remove = function (id) {
        return this.liveService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_live_dto_1.CreateLiveDto]),
        __metadata("design:returntype", void 0)
    ], LiveController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LiveController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LiveController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_live_dto_1.UpdateLiveDto]),
        __metadata("design:returntype", void 0)
    ], LiveController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LiveController.prototype, "remove", null);
    LiveController = __decorate([
        (0, common_1.Controller)('live'),
        __metadata("design:paramtypes", [live_service_1.LiveService])
    ], LiveController);
    return LiveController;
}());
exports.LiveController = LiveController;
//# sourceMappingURL=live.controller.js.map