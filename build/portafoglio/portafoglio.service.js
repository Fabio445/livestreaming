var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
var PortafoglioService = /** @class */ (function () {
    function PortafoglioService() {
    }
    PortafoglioService.prototype.create = function (createPortafoglioDto) {
        return 'This action adds a new portafoglio';
    };
    PortafoglioService.prototype.findAll = function () {
        return "This action returns all portafoglio";
    };
    PortafoglioService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " portafoglio");
    };
    PortafoglioService.prototype.update = function (id, updatePortafoglioDto) {
        return "This action updates a #".concat(id, " portafoglio");
    };
    PortafoglioService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " portafoglio");
    };
    PortafoglioService = __decorate([
        Injectable()
    ], PortafoglioService);
    return PortafoglioService;
}());
export { PortafoglioService };
//# sourceMappingURL=portafoglio.service.js.map