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
<<<<<<< HEAD
=======
import { GuestModule } from './guest/guest.module';
import { Guest } from './guest/entities/guest.entity';
import { TagModule } from './tag/tag.module';
import { Tag } from './tag/entities/tag.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { LiveModule } from './live/live.module';
import { Live } from './live/entities/live.entity';
import { LiveTagModule } from './live-tag/live-tag.module';

>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
<<<<<<< HEAD
      database: 'test',
      entities: [User, Viewer, Streamer, Social, Canale, Portafoglio],
=======
      database: 'test2',
      entities: [User, Viewer, Streamer, Social, Canale, Portafoglio, Guest, Tag, Categoria, Live],
>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b
      synchronize: false,
      migrations: ['src/migrations/**/*.ts'],
      subscribers: [],
    }),
<<<<<<< HEAD
    UserModule,
    CanaleModule,
    ViewerModule,
    StreamerModule,
    SocialModule,
    PortafoglioModule,
=======
	UserModule,
	CanaleModule,
	ViewerModule,
	StreamerModule,
	SocialModule,
	PortafoglioModule,
	GuestModule,
	TagModule,
	CategoriaModule,
	LiveModule,
	LiveTagModule
>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
