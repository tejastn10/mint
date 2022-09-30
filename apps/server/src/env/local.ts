import { config } from "dotenv";

// * Invoking Environment variables
config();

const devConfig = {
	env: process.env.env ?? "DEV",
	port: process.env.port ?? 4000,
	url: process.env.url ?? "localhost:4000",
	db: process.env.db ?? "",
};

const localHostConfig = devConfig;

export { localHostConfig };
