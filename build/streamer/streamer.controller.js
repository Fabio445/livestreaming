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
import { StreamerService } from './streamer.service';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { UpdateStreamerDto } from './dto/update-streamer.dto';
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
        Post(),
        __param(0, Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CreateStreamerDto]),
        __metadata("design:returntype", void 0)
    ], StreamerController.prototype, "create", null);
    __decorate([
        Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StreamerController.prototype, "findAll", null);
    __decorate([
        Get(':id'),
        __param(0, Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], StreamerController.prototype, "findOne", null);
    __decorate([
        Patch(':id'),
        __param(0, Param('id')),
        __param(1, Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, UpdateStreamerDto]),
        __metadata("design:returntype", void 0)
    ], StreamerController.prototype, "update", null);
    __decorate([
        Delete(':id'),
        __param(0, Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], StreamerController.prototype, "remove", null);
    StreamerController = __decorate([
        Controller('streamer'),
        __metadata("design:paramtypes", [StreamerService])
    ], StreamerController);
    return StreamerController;
}());
export { StreamerController };
//# sourceMappingURL=streamer.controller.js.map