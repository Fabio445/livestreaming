"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("./user/entities/user.entity");
var viewer_entity_1 = require("./viewer/entities/viewer.entity");
var user_module_1 = require("./user/user.module");
var canale_module_1 = require("./canale/canale.module");
var viewer_module_1 = require("./viewer/viewer.module");
var streamer_module_1 = require("./streamer/streamer.module");
var streamer_entity_1 = require("./streamer/entities/streamer.entity");
var social_module_1 = require("./social/social.module");
var social_entity_1 = require("./social/entities/social.entity");
var canale_entity_1 = require("./canale/entities/canale.entity");
var portafoglio_module_1 = require("./portafoglio/portafoglio.module");
var portafoglio_entity_1 = require("./portafoglio/entities/portafoglio.entity");
var guest_module_1 = require("./guest/guest.module");
var guest_entity_1 = require("./guest/entities/guest.entity");
var tag_module_1 = require("./tag/tag.module");
var tag_entity_1 = require("./tag/entities/tag.entity");
var categoria_module_1 = require("./categoria/categoria.module");
var categoria_entity_1 = require("./categoria/entities/categoria.entity");
var live_module_1 = require("./live/live.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: '',
                    database: 'test2',
                    entities: [user_entity_1.User, viewer_entity_1.Viewer, streamer_entity_1.Streamer, social_entity_1.Social, canale_entity_1.Canale, portafoglio_entity_1.Portafoglio, guest_entity_1.Guest, tag_entity_1.Tag, categoria_entity_1.Categoria],
                    synchronize: false,
                    migrations: ['src/migrations/**/*.ts'],
                    subscribers: [],
                }),
                user_module_1.UserModule,
                canale_module_1.CanaleModule,
                viewer_module_1.ViewerModule,
                streamer_module_1.StreamerModule,
                social_module_1.SocialModule,
                portafoglio_module_1.PortafoglioModule,
                guest_module_1.GuestModule,
                tag_module_1.TagModule,
                categoria_module_1.CategoriaModule,
                live_module_1.LiveModule
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map