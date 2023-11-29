import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { CanaleModule } from './canale/canale.module';
import { SocialModule } from './social/social.module';
import { Social } from './social/entities/social.entity';
import { Canale } from './canale/entities/canale.entity';
import { PortafoglioModule } from './portafoglio/portafoglio.module';
import { Portafoglio } from './portafoglio/entities/portafoglio.entity';
import { GuestModule } from './guest/guest.module';
import { Guest } from './guest/entities/guest.entity';
import { TagModule } from './tag/tag.module';
import { Tag } from './tag/entities/tag.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { LiveModule } from './live/live.module';
import { Live } from './live/entities/live.entity';
import { TransazioneModule } from './transazione/transazione.module';
import { Transazione } from './transazione/entities/transazione.entity';
import { ChatPrivataModule } from './chat-privata/chat-privata.module';
import { ChatPrivata } from './chat-privata/entities/chat-privata.entity';
import { PrivilegiModule } from './privilegi/privilegi.module';
import { Privilegi } from './privilegi/entities/privilegi.entity';
import { SubscriptionModule } from './subscription/subscription.module';
import { Subscription } from './subscription/entities/subscription.entity';
import { MediaModule } from './media/media.module';
import { Media } from './media/entities/media.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test2',
      entities: [User, Social, Canale, Portafoglio, Guest, Tag, Categoria, Live, Transazione, ChatPrivata, Privilegi, Subscription, Media],
      synchronize: false,
      migrations: ['src/migrations/**/*.ts'],
      subscribers: [],
    }),
	UserModule,
	CanaleModule,
	SocialModule,
	PortafoglioModule,
	GuestModule,
	TagModule,
	CategoriaModule,
	LiveModule,
	TransazioneModule,
	ChatPrivataModule,
	PrivilegiModule,
	SubscriptionModule,
	MediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }

