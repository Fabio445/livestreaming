"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanaleService = void 0;
var common_1 = require("@nestjs/common");
var CanaleService = /** @class */ (function () {
    function CanaleService() {
    }
    CanaleService.prototype.create = function (createCanaleDto) {
        return 'This action adds a new canale';
    };
    CanaleService.prototype.findAll = function () {
        return "This action returns all canale";
    };
    CanaleService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " canale");
    };
    CanaleService.prototype.update = function (id, updateCanaleDto) {
        return "This action updates a #".concat(id, " canale");
    };
    CanaleService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " canale");
    };
    CanaleService = __decorate([
        (0, common_1.Injectable)()
    ], CanaleService);
    return CanaleService;
}());
exports.CanaleService = CanaleService;
//# sourceMappingURL=canale.service.js.map