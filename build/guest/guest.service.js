"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestService = void 0;
var common_1 = require("@nestjs/common");
var GuestService = /** @class */ (function () {
    function GuestService() {
    }
    GuestService.prototype.create = function (createGuestDto) {
        return 'This action adds a new guest';
    };
    GuestService.prototype.findAll = function () {
        return "This action returns all guest";
    };
    GuestService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " guest");
    };
    GuestService.prototype.update = function (id, updateGuestDto) {
        return "This action updates a #".concat(id, " guest");
    };
    GuestService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " guest");
    };
    GuestService = __decorate([
        (0, common_1.Injectable)()
    ], GuestService);
    return GuestService;
}());
exports.GuestService = GuestService;
//# sourceMappingURL=guest.service.js.map