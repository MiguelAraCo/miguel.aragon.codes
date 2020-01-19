import * as React from "react";
import { NextPage } from "next";
import { withTranslation } from "react-i18next";
import {WithTranslation} from "next-i18next";

const Home: NextPage<WithTranslation> = ({ t, i18n }) => (
	<>
		<div>
			<img alt="Miguel Aragón" src="https://via.placeholder.com/150" />
		</div>
		<header>
			<h1>Miguel Aragon</h1>
			<p>｢ミゲル・アラゴン｣</p>
		</header>
		<p>
			Software Engineer <a href="https://global.rakuten.com/corp/about/">@Rakuten</a>
		</p>
		<div>
			<a href="https://github.com/MiguelAraCo">
				<img src="https://via.placeholder.com/40" />
			</a>
			<a href="https://www.linkedin.com/in/miguelaraco">
				<img src="https://via.placeholder.com/40" />
			</a>
			<a href="https://twitter.com/miguelaraco">
				<img src="https://via.placeholder.com/40" />
			</a>
			<a href="https://codepen.io/MiguelAraCo/">
				<img src="https://via.placeholder.com/40" />
			</a>
		</div>
		<div>
			<p>Welcome to my personal website!</p>
			<p>I'm a Software Engineer with a biomedical background that specializes in web technologies.</p>
		</div>
	</>
);

export default withTranslation("common")(Home);
