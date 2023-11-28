var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
var ViewerService = /** @class */ (function () {
    function ViewerService() {
    }
    ViewerService.prototype.create = function (createViewerDto) {
        return 'This action adds a new viewer';
    };
    ViewerService.prototype.findAll = function () {
        return "This action returns all viewer";
    };
    ViewerService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " viewer");
    };
    ViewerService.prototype.update = function (id, updateViewerDto) {
        return "This action updates a #".concat(id, " viewer");
    };
    ViewerService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " viewer");
    };
    ViewerService = __decorate([
        Injectable()
    ], ViewerService);
    return ViewerService;
}());
export { ViewerService };
//# sourceMappingURL=viewer.service.js.map