import { ReactNode } from "react";
import s from "./HeaderH1.module.scss";

type Props = {
	children: ReactNode;
	className?: string;
};

export default function HeaderH1({ children, className }: Props) {
	return <h1 className={` ${className} ${s.title}`}>{children}</h1>;
}
