var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { User } from "../../user/entities/user.entity";
var Portafoglio = /** @class */ (function () {
    function Portafoglio() {
    }
    __decorate([
        PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Portafoglio.prototype, "idPortafoglio", void 0);
    __decorate([
        Column(),
        __metadata("design:type", Number)
    ], Portafoglio.prototype, "bit", void 0);
    __decorate([
        OneToOne(function () { return User; }, function (user) { return user.portafoglio; }),
        JoinColumn({ name: 'IdUser' }),
        __metadata("design:type", User)
    ], Portafoglio.prototype, "user", void 0);
    Portafoglio = __decorate([
        Entity()
    ], Portafoglio);
    return Portafoglio;
}());
export { Portafoglio };
//# sourceMappingURL=portafoglio.entity.js.map