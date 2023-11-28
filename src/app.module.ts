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


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test2',
      entities: [User, Viewer, Streamer, Social, Canale],
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

export class AppModule { }

