import next from "next";
import express from "express";
import nextI18NextMiddleware from "next-i18next/middleware";
import { setupSitemap } from "./sitemap";
import { nextI18NextInstance } from "../i18n";

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

export const port = process.env.PORT || "3000";
export const ROOT_URL: string = dev ? `http://localhost:${port}` : "https://miguel.aragon.codes";

(async () => {
	await app.prepare();

	const server = express();

	setupSitemap({ server });

	server.use(nextI18NextMiddleware(nextI18NextInstance));

	server.get("*", (req, res) => handle(req, res));

	server.listen(port, () => {
		console.log(`> Ready on ${ROOT_URL}`);
	});

	console.log(`> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV}`);
})().catch(console.error);
