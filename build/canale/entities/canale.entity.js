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
exports.Canale = void 0;
var typeorm_1 = require("typeorm");
var social_entity_1 = require("../../social/entities/social.entity");
var streamer_entity_1 = require("../../streamer/entities/streamer.entity");
var Canale = /** @class */ (function () {
    function Canale() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Canale.prototype, "idCanale", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Canale.prototype, "descrizione", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Canale.prototype, "trailer", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Canale.prototype, "immagine", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return social_entity_1.Social; }, function (social) { return social.canale; }),
        (0, typeorm_1.JoinColumn)({ name: 'idSocial' }),
        __metadata("design:type", Array)
    ], Canale.prototype, "socials", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return streamer_entity_1.Streamer; }, function (streamer) { return streamer.canale; }),
        __metadata("design:type", streamer_entity_1.Streamer)
    ], Canale.prototype, "streamer", void 0);
    Canale = __decorate([
        (0, typeorm_1.Entity)()
    ], Canale);
    return Canale;
}());
exports.Canale = Canale;
//# sourceMappingURL=canale.entity.js.map