var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Canale } from "../../canale/entities/canale.entity";
var Social = /** @class */ (function () {
    function Social() {
    }
    __decorate([
        PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Social.prototype, "idSocial", void 0);
    __decorate([
        Column(),
        __metadata("design:type", String)
    ], Social.prototype, "nome", void 0);
    __decorate([
        Column(),
        __metadata("design:type", String)
    ], Social.prototype, "url", void 0);
    __decorate([
        OneToMany(function () { return Canale; }, function (canale) { return canale.socials; }),
        __metadata("design:type", Array)
    ], Social.prototype, "canale", void 0);
    Social = __decorate([
        Entity()
    ], Social);
    return Social;
}());
export { Social };
//# sourceMappingURL=social.entity.js.map