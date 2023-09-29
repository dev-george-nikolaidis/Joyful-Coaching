import { ReactNode } from "react";
import "./Paragraph500.scss";

type Props = {
	children: ReactNode;
	className?: string;
};
export default function Paragraph400({ children, className }: Props) {
	return <p className={` text ${className}`}>{children}</p>;
}
