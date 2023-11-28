"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamerModule = void 0;
var common_1 = require("@nestjs/common");
var streamer_service_1 = require("./streamer.service");
var streamer_controller_1 = require("./streamer.controller");
var StreamerModule = /** @class */ (function () {
    function StreamerModule() {
    }
    StreamerModule = __decorate([
        (0, common_1.Module)({
            controllers: [streamer_controller_1.StreamerController],
            providers: [streamer_service_1.StreamerService],
        })
    ], StreamerModule);
    return StreamerModule;
}());
exports.StreamerModule = StreamerModule;
//# sourceMappingURL=streamer.module.js.map