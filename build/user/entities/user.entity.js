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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var streamer_entity_1 = require("../../streamer/entities/streamer.entity");
var viewer_entity_1 = require("../../viewer/entities/viewer.entity");
var portafoglio_entity_1 = require("../../portafoglio/entities/portafoglio.entity");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], User.prototype, "idUser", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'date' }),
        __metadata("design:type", Date)
    ], User.prototype, "dataNascita", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "numeroTelefono", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
        __metadata("design:type", Date)
    ], User.prototype, "deleteAt", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return viewer_entity_1.Viewer; }, function (viewer) { return viewer.user; }),
        __metadata("design:type", viewer_entity_1.Viewer)
    ], User.prototype, "viewer", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return streamer_entity_1.Streamer; }, function (streamer) { return streamer.user; }),
        __metadata("design:type", streamer_entity_1.Streamer)
    ], User.prototype, "streamer", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return portafoglio_entity_1.Portafoglio; }, function (portafoglio) { return portafoglio.user; }),
        __metadata("design:type", portafoglio_entity_1.Portafoglio)
    ], User.prototype, "portafoglio", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.entity.js.map