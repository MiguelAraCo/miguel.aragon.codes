import * as React from "react";
import { FunctionComponent, HTMLAttributes } from "react";
import { IconType } from "react-icons";

export type SocialLinkProps = HTMLAttributes<HTMLAnchorElement> & {
	Icon: IconType;
	href: string;
};

export const SocialLink: FunctionComponent<SocialLinkProps> = ({ className, href, Icon }) => {
	className = className ? `${className} ` : " ";
	return (
		<a className={className + "mr-4 last:mr-0"} href={href}>
			<Icon className="w-8 h-8" />
		</a>
	);
};

export default SocialLink;
