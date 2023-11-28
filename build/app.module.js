var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Viewer } from './viewer/entities/viewer.entity';
import { UserModule } from './user/user.module';
import { CanaleModule } from './canale/canale.module';
import { ViewerModule } from './viewer/viewer.module';
import { StreamerModule } from './streamer/streamer.module';
import { Streamer } from './streamer/entities/streamer.entity';
import { SocialModule } from './social/social.module';
import { Social } from './social/entities/social.entity';
import { Canale } from './canale/entities/canale.entity';
import { PortafoglioModule } from './portafoglio/portafoglio.module';
import { Portafoglio } from './portafoglio/entities/portafoglio.entity';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Module({
            imports: [
                TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: '',
                    database: 'test',
                    entities: [User, Viewer, Streamer, Social, Canale, Portafoglio],
                    synchronize: false,
                    migrations: ['src/migrations/**/*.ts'],
                    subscribers: [],
                }),
                UserModule,
                CanaleModule,
                ViewerModule,
                StreamerModule,
                SocialModule,
                PortafoglioModule
            ],
            controllers: [AppController],
            providers: [AppService],
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map