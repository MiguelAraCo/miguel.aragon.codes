import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { withTranslation } from "react-i18next";
import { WithTranslation } from "next-i18next";

const NotFoundErrorPage: NextPage<WithTranslation> = ({ t, i18n }) => (
	<>
		<Head>
			<title>Not Found! | Miguel Aragon's site</title>
		</Head>
		<div>
			<img alt="Miguel Aragón" src="https://via.placeholder.com/150" />
		</div>
		<header>
			<h1>Uh oh</h1>
			<p>Are you lost?</p>
		</header>
		<p>
			Click{" "}
			<Link href="/">
				<a>here</a>
			</Link>{" "}
			to go back home.
		</p>
	</>
);

export default withTranslation("common")(NotFoundErrorPage);
