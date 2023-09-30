import { ReactNode } from "react";
import s from "./HeadingH1.module.scss";

type Props = {
	children: ReactNode;
};

export default function HeaderH1({ children }: Props) {
	return <h1 className={`${s.title}`}>{children}</h1>;
}
