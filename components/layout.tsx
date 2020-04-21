import * as React from "react";
import { FunctionComponent } from "react";

import { Header } from "components/header";
import { Footer } from "components/footer";

export type LayoutProps = {};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
	<>
		<div className="h-screen flex flex-col justify-center">
			<Header className="" />
			<main className="flex flex-col justify-content overflow-y-auto mt-4 mb-4">
				{children}
			</main>
			<Footer className="" />
		</div>
	</>
);

export default Layout;
