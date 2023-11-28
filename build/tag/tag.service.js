"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagService = void 0;
var common_1 = require("@nestjs/common");
var TagService = /** @class */ (function () {
    function TagService() {
    }
    TagService.prototype.create = function (createTagDto) {
        return 'This action adds a new tag';
    };
    TagService.prototype.findAll = function () {
        return "This action returns all tag";
    };
    TagService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " tag");
    };
    TagService.prototype.update = function (id, updateTagDto) {
        return "This action updates a #".concat(id, " tag");
    };
    TagService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " tag");
    };
    TagService = __decorate([
        (0, common_1.Injectable)()
    ], TagService);
    return TagService;
}());
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map