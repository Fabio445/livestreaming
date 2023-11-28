import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [User],
      synchronize: false,
      //migrations: ['src/migrations/**/*.ts'],
      subscribers: [],
    }),
	UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


// https://docs.nestjs.com/techniques/database
