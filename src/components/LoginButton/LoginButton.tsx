import s from "./LoginButton.module.scss";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function LoginButton({ children, className }: Props) {
	return <button className={`${className} ${s.btn}`}>{children}</button>;
}
