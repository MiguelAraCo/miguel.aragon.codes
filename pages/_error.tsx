import React from "react";
import { withTranslation, WithTranslationProps } from "react-i18next";
import { NextPage } from "next";
import { WithTranslation } from "next-i18next";

interface ErrorProps {
	statusCode?: number | undefined;
}

type ErrorType = React.ComponentType<ErrorProps & WithTranslationProps> & Partial<NextPage>;

const Error: ErrorType = withTranslation("common")(({ statusCode, t }: ErrorProps & WithTranslation) => (
	<>
		<p>{statusCode}</p>
		<p>{t("example")}</p>
	</>
));

// .getInitialProps needs to be assigned to the result of withTranslation, otherwise the component created by that function won't have the property
// and Next.js won't execute the function
Error.getInitialProps = ({ res, err }) => {
	const statusCode: number | undefined = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode } as ErrorProps;
};

Error.defaultProps = {
	statusCode: void 0,
};

export default Error;
