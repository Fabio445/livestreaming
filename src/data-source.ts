import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./user/entities/user.entity"
import { Viewer } from "./viewer/entities/viewer.entity"
import { Streamer } from "./streamer/entities/streamer.entity"
import { Social } from "./social/entities/social.entity"
import { Canale } from "./canale/entities/canale.entity"
import { Portafoglio } from "./portafoglio/entities/portafoglio.entity"
import { Guest } from "./guest/entities/guest.entity"
import { Tag } from "./tag/entities/tag.entity"
import { Categoria } from "./categoria/entities/categoria.entity"
import { Live } from "./live/entities/live.entity"
 
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "test2",
    synchronize: false,
    logging: false,
    entities: [User, Viewer, Streamer, Social, Canale, Portafoglio, Guest, Tag, Categoria, Live],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: [],
})
 




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