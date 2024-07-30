import { DataSource } from "typeorm";
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./config";

export const appDataSource: DataSource = new DataSource({
	type: "postgres",
	host: DB_HOST,
	port: +DB_PORT,
	username: DB_USERNAME,
	password: DB_PASSWORD,
	database: "goh",
	synchronize: true,
	logging: false,
	entities: ["src/models/**/*.ts"],
});
