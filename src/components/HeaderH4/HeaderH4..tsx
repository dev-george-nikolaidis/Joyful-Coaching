import { ReactNode } from "react";
import s from "./HeaderH4.module.scss";

s.title;
type Props = {
	children: ReactNode;
	className?: string;
};

export default function HeaderH4({ children, className }: Props) {
	return <h4 className={` ${s.title}  ${className}`}>{children}</h4>;
}
