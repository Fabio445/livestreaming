"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveService = void 0;
var common_1 = require("@nestjs/common");
var LiveService = /** @class */ (function () {
    function LiveService() {
    }
    LiveService.prototype.create = function (createLiveDto) {
        return 'This action adds a new live';
    };
    LiveService.prototype.findAll = function () {
        return "This action returns all live";
    };
    LiveService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " live");
    };
    LiveService.prototype.update = function (id, updateLiveDto) {
        return "This action updates a #".concat(id, " live");
    };
    LiveService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " live");
    };
    LiveService = __decorate([
        (0, common_1.Injectable)()
    ], LiveService);
    return LiveService;
}());
exports.LiveService = LiveService;
//# sourceMappingURL=live.service.js.map