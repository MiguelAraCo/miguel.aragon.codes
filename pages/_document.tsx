import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

import { i18n } from "../i18n";

export type CustomDocumentProps = {
	/**
	 * Holds the language requested by the client
	 */
	language: string;
};

/**
 * Customizes how the <HTML> tag is rendered by Next.js
 *
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */
class CustomDocument extends Document<CustomDocumentProps> {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		const { req } = ctx;

		const requestLanguage = (req as any)?.language;
		const language = typeof requestLanguage !== "undefined" ? requestLanguage : i18n.language;

		return {
			language,
			...initialProps,
		};
	}

	render() {
		// "title" will be added by each page
		// noinspection HtmlRequiredTitleElement
		return (
			<Html lang={this.props.language}>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
