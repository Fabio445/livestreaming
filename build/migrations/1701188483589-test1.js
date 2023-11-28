var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Test11701188483589 = /** @class */ (function () {
    function Test11701188483589() {
        this.name = 'Test11701188483589';
    }
    Test11701188483589.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `social` (`idSocial` int NOT NULL AUTO_INCREMENT, `nome` varchar(255) NOT NULL, `url` varchar(255) NOT NULL, PRIMARY KEY (`idSocial`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `canale` (`idCanale` int NOT NULL AUTO_INCREMENT, `descrizione` varchar(255) NOT NULL, `trailer` varchar(255) NOT NULL, `immagine` varchar(255) NOT NULL, `idSocial` int NULL, `idStreamer` int NULL, UNIQUE INDEX `REL_74e0c12e1bc4ac558ddfa4164d` (`idStreamer`), PRIMARY KEY (`idCanale`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `streamer` (`idStreamer` int NOT NULL AUTO_INCREMENT, `idUser` int NULL, UNIQUE INDEX `REL_1b470e1ab15ab08e83f4414888` (`idUser`), PRIMARY KEY (`idStreamer`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `viewer` (`idViewer` int NOT NULL AUTO_INCREMENT, `idUser` int NULL, UNIQUE INDEX `REL_22d3ec057bb8794fa4a8069393` (`idUser`), PRIMARY KEY (`idViewer`)) ENGINE=InnoDB")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `portafoglio` (`idPortafoglio` int NOT NULL AUTO_INCREMENT, `bit` int NOT NULL, `IdUser` int NULL, UNIQUE INDEX `REL_636f868723b2d969f92b266689` (`IdUser`), PRIMARY KEY (`idPortafoglio`)) ENGINE=InnoDB")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `user` (`idUser` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `dataNascita` datetime NOT NULL, `numeroTelefono` varchar(255) NOT NULL, `deleteAt` timestamp NULL, PRIMARY KEY (`idUser`)) ENGINE=InnoDB")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `canale` ADD CONSTRAINT `FK_dd7d05cf549aef180ccd1106774` FOREIGN KEY (`idSocial`) REFERENCES `social`(`idSocial`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `canale` ADD CONSTRAINT `FK_74e0c12e1bc4ac558ddfa4164d0` FOREIGN KEY (`idStreamer`) REFERENCES `streamer`(`idStreamer`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `streamer` ADD CONSTRAINT `FK_1b470e1ab15ab08e83f4414888c` FOREIGN KEY (`idUser`) REFERENCES `user`(`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `viewer` ADD CONSTRAINT `FK_22d3ec057bb8794fa4a8069393d` FOREIGN KEY (`idUser`) REFERENCES `user`(`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `portafoglio` ADD CONSTRAINT `FK_636f868723b2d969f92b2666898` FOREIGN KEY (`IdUser`) REFERENCES `user`(`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Test11701188483589.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `portafoglio` DROP FOREIGN KEY `FK_636f868723b2d969f92b2666898`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `viewer` DROP FOREIGN KEY `FK_22d3ec057bb8794fa4a8069393d`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `streamer` DROP FOREIGN KEY `FK_1b470e1ab15ab08e83f4414888c`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `canale` DROP FOREIGN KEY `FK_74e0c12e1bc4ac558ddfa4164d0`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `canale` DROP FOREIGN KEY `FK_dd7d05cf549aef180ccd1106774`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `user`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_636f868723b2d969f92b266689` ON `portafoglio`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `portafoglio`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_22d3ec057bb8794fa4a8069393` ON `viewer`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `viewer`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_1b470e1ab15ab08e83f4414888` ON `streamer`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `streamer`")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_74e0c12e1bc4ac558ddfa4164d` ON `canale`")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `canale`")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `social`")];
                    case 15:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Test11701188483589;
}());
export { Test11701188483589 };
//# sourceMappingURL=1701188483589-test1.js.map