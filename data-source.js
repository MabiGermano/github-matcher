import { DataSource } from "typeorm";
export const dataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    synchronize: true,
    entities: ["./src/entities/*.js"],
})
