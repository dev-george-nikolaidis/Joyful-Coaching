import { ReactNode } from "react";
import s from "./Paragraph500.module.scss";

type Props = {
	children: ReactNode;
	className?: string;
};
export default function Paragraph500({ children, className }: Props) {
	return <p className={` ${s.text} ${className}`}>{children}</p>;
}
