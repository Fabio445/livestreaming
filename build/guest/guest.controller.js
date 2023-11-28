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
exports.GuestController = void 0;
var common_1 = require("@nestjs/common");
var guest_service_1 = require("./guest.service");
var create_guest_dto_1 = require("./dto/create-guest.dto");
var update_guest_dto_1 = require("./dto/update-guest.dto");
var GuestController = /** @class */ (function () {
    function GuestController(guestService) {
        this.guestService = guestService;
    }
    GuestController.prototype.create = function (createGuestDto) {
        return this.guestService.create(createGuestDto);
    };
    GuestController.prototype.findAll = function () {
        return this.guestService.findAll();
    };
    GuestController.prototype.findOne = function (id) {
        return this.guestService.findOne(+id);
    };
    GuestController.prototype.update = function (id, updateGuestDto) {
        return this.guestService.update(+id, updateGuestDto);
    };
    GuestController.prototype.remove = function (id) {
        return this.guestService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_guest_dto_1.CreateGuestDto]),
        __metadata("design:returntype", void 0)
    ], GuestController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GuestController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GuestController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_guest_dto_1.UpdateGuestDto]),
        __metadata("design:returntype", void 0)
    ], GuestController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GuestController.prototype, "remove", null);
    GuestController = __decorate([
        (0, common_1.Controller)('guest'),
        __metadata("design:paramtypes", [guest_service_1.GuestService])
    ], GuestController);
    return GuestController;
}());
exports.GuestController = GuestController;
//# sourceMappingURL=guest.controller.js.map