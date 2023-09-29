import { ReactNode } from "react";
import "./HeadingH1.scss";

type Props = {
	children: ReactNode;
};

export default function HeaderH1({ children }: Props) {
	return <h1 className="title">{children}</h1>;
}
