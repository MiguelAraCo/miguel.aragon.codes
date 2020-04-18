import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { withTranslation } from "react-i18next";
import { WithTranslation } from "next-i18next";

import { FaCodepen, FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";

import styles from "./index.module.css";

const Home: NextPage<WithTranslation> = ({ t, i18n }) => (
	<>
		<Head>
			<title>Home | Miguel Aragon's site</title>
		</Head>
		<div>
			<img alt="Miguel Aragón" src="https://via.placeholder.com/150" />
		</div>
		<header>
			<h1>Miguel Aragon</h1>
			<p>｢アラゴン・ミゲル｣</p>
		</header>
		<p>
			Architect <a href="https://global.rakuten.com/corp/about/">@Rakuten</a>
		</p>
		<div className={styles.socialLinks}>
			<a href="https://github.com/MiguelAraCo">
				<FaGithubAlt />
			</a>
			<a href="https://www.linkedin.com/in/miguelaraco">
				<FaLinkedinIn />
			</a>
			<a href="https://twitter.com/miguelaraco">
				<FaTwitter />
			</a>
			<a href="https://codesandbox.io/u/MiguelAraCo">
				<FiCodesandbox />
			</a>
			<a href="https://codepen.io/MiguelAraCo">
				<FaCodepen />
			</a>
		</div>
		<div>
			<p>Welcome to my personal website!</p>
			<p>As you can see, I'm currently in the process of updating it. Come back later!</p>
		</div>
	</>
);

export default withTranslation("common")(Home);
