import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { withTranslation } from "react-i18next";
import { WithTranslation } from "next-i18next";

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
		<div>
			<a href="https://github.com/MiguelAraCo">
				<img alt="GitHub profile" src="https://via.placeholder.com/40" />
			</a>
			<a href="https://www.linkedin.com/in/miguelaraco">
				<img alt="LinkedIn profile" src="https://via.placeholder.com/40" />
			</a>
			<a href="https://twitter.com/miguelaraco">
				<img alt="Twitter profile" src="https://via.placeholder.com/40" />
			</a>
			<a href="https://codepen.io/MiguelAraCo/">
				<img alt="Codepen profile" src="https://via.placeholder.com/40" />
			</a>
		</div>
		<div>
			<p>Welcome to my personal website!</p>
			<p>As you can see, I'm currently in the process of updating it, come back later!</p>
		</div>
	</>
);

export default withTranslation("common")(Home);
