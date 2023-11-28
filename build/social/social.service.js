"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialService = void 0;
var common_1 = require("@nestjs/common");
var SocialService = /** @class */ (function () {
    function SocialService() {
    }
    SocialService.prototype.create = function (createSocialDto) {
        return 'This action adds a new social';
    };
    SocialService.prototype.findAll = function () {
        return "This action returns all social";
    };
    SocialService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " social");
    };
    SocialService.prototype.update = function (id, updateSocialDto) {
        return "This action updates a #".concat(id, " social");
    };
    SocialService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " social");
    };
    SocialService = __decorate([
        (0, common_1.Injectable)()
    ], SocialService);
    return SocialService;
}());
exports.SocialService = SocialService;
//# sourceMappingURL=social.service.js.map