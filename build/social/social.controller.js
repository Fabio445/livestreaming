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
exports.SocialController = void 0;
var common_1 = require("@nestjs/common");
var social_service_1 = require("./social.service");
var create_social_dto_1 = require("./dto/create-social.dto");
var update_social_dto_1 = require("./dto/update-social.dto");
var SocialController = /** @class */ (function () {
    function SocialController(socialService) {
        this.socialService = socialService;
    }
    SocialController.prototype.create = function (createSocialDto) {
        return this.socialService.create(createSocialDto);
    };
    SocialController.prototype.findAll = function () {
        return this.socialService.findAll();
    };
    SocialController.prototype.findOne = function (id) {
        return this.socialService.findOne(+id);
    };
    SocialController.prototype.update = function (id, updateSocialDto) {
        return this.socialService.update(+id, updateSocialDto);
    };
    SocialController.prototype.remove = function (id) {
        return this.socialService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_social_dto_1.CreateSocialDto]),
        __metadata("design:returntype", void 0)
    ], SocialController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SocialController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SocialController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_social_dto_1.UpdateSocialDto]),
        __metadata("design:returntype", void 0)
    ], SocialController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SocialController.prototype, "remove", null);
    SocialController = __decorate([
        (0, common_1.Controller)('social'),
        __metadata("design:paramtypes", [social_service_1.SocialService])
    ], SocialController);
    return SocialController;
}());
exports.SocialController = SocialController;
//# sourceMappingURL=social.controller.js.map