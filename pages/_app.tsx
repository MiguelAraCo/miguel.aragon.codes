import React from "react";
import App from "next/app";

import { appWithTranslation } from "../i18n";

export class MiguelAragonCodes extends App {
	render(): JSX.Element {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} />;
	}
}

export default appWithTranslation(MiguelAragonCodes);
