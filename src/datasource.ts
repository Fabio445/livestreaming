import { DataSource, DataSourceOptions,MysqlConnectionOptions } from "typeorm";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { configDotenv } from 'dotenv';
configDotenv({ path: '../credentials.env' });

const datasource = {
    type: process.env.DATABASE_TYPE,
    username: process.env.DATABASE_USERNAME,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    name: process.env.DATABASE_NAME,
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: ['src/path-to-migrations-dir/**/*.ts'],
    subscribers: [],
}

const datasourceOptions = new MysqlConnectionOptions(datasource)

const connectDB =  new DataSource(datasource)
connectDB
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })
 
export default connectDB;
//typeorm migration:generate -d src/path-to-migrations-dir/prova
