var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Social } from "../../social/entities/social.entity";
import { Streamer } from "../../streamer/entities/streamer.entity";
var Canale = /** @class */ (function () {
    function Canale() {
    }
    __decorate([
        PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Canale.prototype, "idCanale", void 0);
    __decorate([
        Column(),
        __metadata("design:type", String)
    ], Canale.prototype, "descrizione", void 0);
    __decorate([
        Column(),
        __metadata("design:type", String)
    ], Canale.prototype, "trailer", void 0);
    __decorate([
        Column(),
        __metadata("design:type", String)
    ], Canale.prototype, "immagine", void 0);
    __decorate([
        ManyToOne(function () { return Social; }, function (social) { return social.canale; }),
        JoinColumn({ name: 'idSocial' }),
        __metadata("design:type", Social)
    ], Canale.prototype, "socials", void 0);
    __decorate([
        OneToOne(function () { return Streamer; }, function (streamer) { return streamer.canale; }),
        JoinColumn({ name: 'idStreamer' }),
        __metadata("design:type", Streamer)
    ], Canale.prototype, "streamer", void 0);
    Canale = __decorate([
        Entity()
    ], Canale);
    return Canale;
}());
export { Canale };
//# sourceMappingURL=canale.entity.js.map