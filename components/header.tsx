import * as React from "react";
import { FunctionComponent, HTMLAttributes } from "react";

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {};

export const Header: FunctionComponent<HeaderProps> = props => {
	return <header {...props}></header>;
};

export default Header;
