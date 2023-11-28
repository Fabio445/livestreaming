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


import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./user/user.entity"
 
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "test",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: [],
})
 