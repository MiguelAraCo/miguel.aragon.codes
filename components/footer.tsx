import * as React from "react";
import { FunctionComponent, HTMLAttributes } from "react";

export type FooterProps = HTMLAttributes<HTMLDivElement> & {};

export const Footer: FunctionComponent<FooterProps> = props => {
    return <footer {...props}></footer>;
};

export default Footer;
