"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSocialDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var create_social_dto_1 = require("./create-social.dto");
var UpdateSocialDto = /** @class */ (function (_super) {
    __extends(UpdateSocialDto, _super);
    function UpdateSocialDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateSocialDto;
}((0, mapped_types_1.PartialType)(create_social_dto_1.CreateSocialDto)));
exports.UpdateSocialDto = UpdateSocialDto;
//# sourceMappingURL=update-social.dto.js.map