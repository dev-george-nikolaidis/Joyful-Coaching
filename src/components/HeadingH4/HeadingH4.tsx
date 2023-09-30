import { ReactNode } from "react";
import s from "./HeadingH4.module.scss";

s.title;
type Props = {
	children: ReactNode;
	className?: string;
};

export default function HeaderH4({ children, className }: Props) {
	return <h1 className={` ${s.title}  ${className}`}>{children}</h1>;
}
