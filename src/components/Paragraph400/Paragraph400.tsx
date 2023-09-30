import { ReactNode } from "react";
import s from "./Paragraph400.module.scss";

type Props = {
	children: ReactNode;
	className?: string;
};
export default function Paragraph400({ children, className }: Props) {
	return <p className={`   ${s.text} ${className} `}>{children}</p>;
}
