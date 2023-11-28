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
exports.Streamer = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../../user/entities/user.entity");
var canale_entity_1 = require("../../canale/entities/canale.entity");
var Streamer = /** @class */ (function () {
    function Streamer() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Streamer.prototype, "idStreamer", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }, function (user) { return user.streamer; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", user_entity_1.User)
    ], Streamer.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return canale_entity_1.Canale; }, function (canale) { return canale.streamer; }),
        (0, typeorm_1.JoinColumn)({ name: 'idStreamer' }),
        __metadata("design:type", Array)
    ], Streamer.prototype, "canale", void 0);
    Streamer = __decorate([
        (0, typeorm_1.Entity)()
    ], Streamer);
    return Streamer;
}());
exports.Streamer = Streamer;
//# sourceMappingURL=streamer.entity.js.map