import s from "./Button.module.scss";
type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function Button({ children, className }: Props) {
	return <button className={`${className} ${s.btn}`}>{children}</button>;
}
