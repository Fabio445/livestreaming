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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Social = void 0;
var typeorm_1 = require("typeorm");
var canale_entity_1 = require("../../canale/entities/canale.entity");
var Social = /** @class */ (function () {
    function Social() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Social.prototype, "idSocial", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Social.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Social.prototype, "url", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return canale_entity_1.Canale; }, function (canale) { return canale.socials; }),
        __metadata("design:type", Array)
    ], Social.prototype, "canale", void 0);
    Social = __decorate([
        (0, typeorm_1.Entity)()
    ], Social);
    return Social;
}());
exports.Social = Social;
//# sourceMappingURL=social.entity.js.map