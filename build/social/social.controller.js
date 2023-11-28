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
import { SocialService } from './social.service';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
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
        Post(),
        __param(0, Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CreateSocialDto]),
        __metadata("design:returntype", void 0)
    ], SocialController.prototype, "create", null);
    __decorate([
        Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SocialController.prototype, "findAll", null);
    __decorate([
        Get(':id'),
        __param(0, Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SocialController.prototype, "findOne", null);
    __decorate([
        Patch(':id'),
        __param(0, Param('id')),
        __param(1, Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, UpdateSocialDto]),
        __metadata("design:returntype", void 0)
    ], SocialController.prototype, "update", null);
    __decorate([
        Delete(':id'),
        __param(0, Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SocialController.prototype, "remove", null);
    SocialController = __decorate([
        Controller('social'),
        __metadata("design:paramtypes", [SocialService])
    ], SocialController);
    return SocialController;
}());
export { SocialController };
//# sourceMappingURL=social.controller.js.map