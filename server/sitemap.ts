import { createSitemap, EnumChangefreq } from "sitemap";
import { Express } from "express";
import { ROOT_URL } from "./index";

const sitemap = createSitemap({
	hostname: ROOT_URL,
	cacheTime: 600000, // 600 sec - cache purge period
});

export namespace setupSitemap {
	export interface Options {
		server: Express;
	}
}

export const setupSitemap = ({ server }: setupSitemap.Options) => {
	sitemap.add({
		url: `${ROOT_URL}/`,
		changefreq: EnumChangefreq.ALWAYS,
		priority: 1,
	});

	server.get("/sitemap.xml", (request, response) => {
		const serializedSitemap = sitemap.toXML(true);

		response.header("Content-Type", "application/xml");
		response.send(serializedSitemap);
	});
};
