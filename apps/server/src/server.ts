import Fastify from "fastify";
import { localHostConfig } from "./env/local";
import { error, log, success } from "@mint/log";

const { port, env, db } = localHostConfig;

const fastify = Fastify({
	logger: false,
});

const start = async () => {
	try {
		await fastify.listen({ port: +port });

		success("Server up and running successfully");
		log(`Server running in ${env} mode on port ${port}`);
		log(`DB string: ${db}`);
	} catch (err) {
		error(err);
		process.exit(1);
	}
};

start();
