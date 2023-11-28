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
exports.UserService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("typeorm");
var typeorm_2 = require("@nestjs/typeorm");
var user_entity_1 = require("./entities/user.entity");
var UserService = /** @class */ (function () {
    function UserService(repo) {
        this.repo = repo;
    }
    UserService.prototype.create = function (createUserDto) {
        return this.repo.find();
    };
    UserService.prototype.findAll = function () {
        return this.repo.find();
    };
    UserService.prototype.findOne = function (idUser) {
        return this.repo.findOneBy({ idUser: idUser });
    };
    UserService.prototype.update = function (id, updateUserDto) {
        return "This action updates a #".concat(id, " user");
    };
    UserService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " user");
    };
    UserService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
        __metadata("design:paramtypes", [typeorm_1.Repository])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map