import { ReactNode } from "react";
import "./HeadingH3.scss";

type Props = {
	children: ReactNode;
	className?: string;
};

export default function HeaderH3({ children, className }: Props) {
	return <h1 className={` title  ${className}`}>{children}</h1>;
}
