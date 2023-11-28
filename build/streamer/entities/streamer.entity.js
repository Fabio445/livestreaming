var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Canale } from "../../canale/entities/canale.entity";
var Streamer = /** @class */ (function () {
    function Streamer() {
    }
    __decorate([
        PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Streamer.prototype, "idStreamer", void 0);
    __decorate([
        OneToOne(function () { return User; }, function (user) { return user.streamer; }),
        JoinColumn({ name: 'idUser' }),
        __metadata("design:type", Array)
    ], Streamer.prototype, "user", void 0);
    __decorate([
        OneToOne(function () { return Canale; }, function (canale) { return canale.streamer; }),
        __metadata("design:type", Array)
    ], Streamer.prototype, "canale", void 0);
    Streamer = __decorate([
        Entity()
    ], Streamer);
    return Streamer;
}());
export { Streamer };
//# sourceMappingURL=streamer.entity.js.map