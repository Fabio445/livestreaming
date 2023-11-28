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
exports.StreamerController = void 0;
var common_1 = require("@nestjs/common");
var streamer_service_1 = require("./streamer.service");
var create_streamer_dto_1 = require("./dto/create-streamer.dto");
var update_streamer_dto_1 = require("./dto/update-streamer.dto");
var StreamerController = /** @class */ (function () {
    function StreamerController(streamerService) {
        this.streamerService = streamerService;
    }
    StreamerController.prototype.create = function (createStreamerDto) {
        return this.streamerService.create(createStreamerDto);
    };
    StreamerController.prototype.findAll = function () {
        return this.streamerService.findAll();
    };
    StreamerController.prototype.findOne = function (id) {
        return this.streamerService.findOne(+id);
    };
    StreamerController.prototype.update = function (id, updateStreamerDto) {
        return this.streamerService.update(+id, updateStreamerDto);
    };
    StreamerController.prototype.remove = function (id) {
        return this.streamerService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_streamer_dto_1.CreateStreamerDto]),
        __metadata("design:returntype", void 0)
    ], StreamerController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StreamerController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], StreamerController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_streamer_dto_1.UpdateStreamerDto]),
        __metadata("design:returntype", void 0)
    ], StreamerController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], StreamerController.prototype, "remove", null);
    StreamerController = __decorate([
        (0, common_1.Controller)('streamer'),
        __metadata("design:paramtypes", [streamer_service_1.StreamerService])
    ], StreamerController);
    return StreamerController;
}());
exports.StreamerController = StreamerController;
//# sourceMappingURL=streamer.controller.js.map