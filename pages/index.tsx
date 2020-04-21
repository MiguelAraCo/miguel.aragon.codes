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
					<title>Home | Miguel Aragon's site</title>
				</Head>
				<header className="mb-8 md:mb-0 md:flex md:flex-row-reverse md:justify-end md:items-center">
					<div className="mb-4 flex flex-row justify-center">
						<img className="w-40 md:w-56 h-40 md:h-56" alt="Miguel Aragon" src="/images/profile.png" />
					</div>
					<div className="text-center md:text-left md:mr-16">
						<h1 className="text-3xl md:text-4xl">Miguel Aragon</h1>
						<p className="mb-4 text-lg md:text-xl">｢アラゴン・ミゲル｣</p>
						<p>
							Architect <a href="https://global.rakuten.com/corp/about/">@Rakuten</a>
						</p>
					</div>
				</header>
				<div className="mb-4 border-t-2 w-24 md:w-48 mx-auto md:mx-0" />
				<div className="mb-4 flex flex-row justify-center md:justify-start">
					<SocialLink href="https://github.com/MiguelAraCo" Icon={FaGithubAlt} />
					<SocialLink href="https://www.linkedin.com/in/miguelaraco" Icon={FaLinkedinIn} />
					<SocialLink href="https://twitter.com/miguelaraco" Icon={FaTwitter} />
					<SocialLink href="https://codesandbox.io/u/MiguelAraCo" Icon={FiCodesandbox} />
					<SocialLink href="https://codepen.io/MiguelAraCo" Icon={FaCodepen} />
				</div>
				<div className="mb-8 border-t-2 w-24 md:w-48 mx-auto md:mx-0" />
				<div className="pl-4 pr-4 md:p-0 md:pl-0 md:pr-0 text-center md:text-left">
					<p>Welcome to my personal website!</p>
					<br />
					<p>As you can see, I'm currently in the process of updating it. Come back later!</p>
				</div>
			</div>
		</Layout>
	</>
);

export default withTranslation("common")(Home);
