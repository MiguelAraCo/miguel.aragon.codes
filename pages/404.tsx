import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { withTranslation } from "react-i18next";
import { WithTranslation } from "next-i18next";
import Layout from "../components/layout";

const NotFoundErrorPage: NextPage<WithTranslation> = ({ t, i18n }) => (
	<>
		<Layout>
			<Head>
				<title>{t("common:head.title", { pageTitle: t("404:head-title") })}</title>
			</Head>
			<div className="container mx-auto">
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-3xl">{t("404:title")}</h1>
					<p className="mb-8 text-xl">{t("404:subtitle")}</p>
					<p>
						<Link href="/">
							<a>{t("404:message")}</a>
						</Link>
					</p>
				</div>
			</div>
		</Layout>
	</>
);

export default withTranslation(["common", "404"])(NotFoundErrorPage);
