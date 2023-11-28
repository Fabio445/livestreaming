"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user/entities/user.entity");
var viewer_entity_1 = require("./viewer/entities/viewer.entity");
var streamer_entity_1 = require("./streamer/entities/streamer.entity");
var social_entity_1 = require("./social/entities/social.entity");
var canale_entity_1 = require("./canale/entities/canale.entity");
var portafoglio_entity_1 = require("./portafoglio/entities/portafoglio.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'test',
    synchronize: false,
    logging: false,
    entities: [user_entity_1.User, viewer_entity_1.Viewer, streamer_entity_1.Streamer, social_entity_1.Social, canale_entity_1.Canale, portafoglio_entity_1.Portafoglio],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: [],
});
/*import { DataSource } from "typeorm"
import "reflect-metadata"
import { User } from "./user/user.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    name: "test",
    synchronize: false,
    migrations: ['src/migrations/*{.ts,.js}'],
    entities: [User]
})

/*AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })*/
//# sourceMappingURL=data-source.js.map