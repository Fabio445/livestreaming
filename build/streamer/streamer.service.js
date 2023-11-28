"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamerService = void 0;
var common_1 = require("@nestjs/common");
var StreamerService = /** @class */ (function () {
    function StreamerService() {
    }
    StreamerService.prototype.create = function (createStreamerDto) {
        return 'This action adds a new streamer';
    };
    StreamerService.prototype.findAll = function () {
        return "This action returns all streamer";
    };
    StreamerService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " streamer");
    };
    StreamerService.prototype.update = function (id, updateStreamerDto) {
        return "This action updates a #".concat(id, " streamer");
    };
    StreamerService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " streamer");
    };
    StreamerService = __decorate([
        (0, common_1.Injectable)()
    ], StreamerService);
    return StreamerService;
}());
exports.StreamerService = StreamerService;
//# sourceMappingURL=streamer.service.js.map