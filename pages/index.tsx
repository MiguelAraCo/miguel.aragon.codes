import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { withTranslation } from "react-i18next";
import { WithTranslation } from "next-i18next";

import { FaCodepen, FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";

import { Layout } from "components/layout";

import SocialLink from "components/socialLink";

const Home: NextPage<WithTranslation> = ({ t, i18n }) => (
	<>
		<Layout>
			<div className="container mx-auto">
				<Head>
					<title>{t("common:head.title", { pageTitle: t("home:head-title") })}</title>
				</Head>
				<header className="mb-8 md:mb-0 md:flex md:flex-row-reverse md:justify-center md:items-center">
					<div className="mb-4 flex flex-row justify-center">
						<img className="w-40 md:w-56 h-40 md:h-56" alt="Profile picture" src="/images/profile.png" />
					</div>
					<div className="text-center md:text-left md:mr-16">
						<h1 className="text-3xl md:text-4xl">{t("home:names.main")}</h1>
						<p className="mb-4 text-lg md:text-xl">{t("home:names.secondary")}</p>
						<p className="mb-4">
							{t("home:introduction.title")}{" "}
							<a href={t("home:introduction.company.url")}>@{t("home:introduction.company.name")}</a>
						</p>
						<div>
							<div className="mb-4 border-t-2 w-24 md:w-48 mx-auto md:mx-0" />
							<div className="mb-4 flex flex-row justify-center md:justify-start">
								<SocialLink href="https://github.com/MiguelAraCo" Icon={FaGithubAlt} />
								<SocialLink href="https://www.linkedin.com/in/miguelaraco" Icon={FaLinkedinIn} />
								<SocialLink href="https://twitter.com/miguelaraco" Icon={FaTwitter} />
								<SocialLink href="https://codesandbox.io/u/MiguelAraCo" Icon={FiCodesandbox} />
								<SocialLink href="https://codepen.io/MiguelAraCo" Icon={FaCodepen} />
							</div>
							<div className="mb-8 border-t-2 w-24 md:w-48 mx-auto md:mx-0" />
						</div>
					</div>
				</header>
			</div>
		</Layout>
	</>
);

export default withTranslation(["common", "home"])(Home);
