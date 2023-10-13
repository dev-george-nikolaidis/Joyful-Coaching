import s from "./LoginButton.module.scss";

type Props = {
	children: React.ReactNode;
	className?: string;
	disable?: boolean;
};

export default function LoginButton({ children, className, disable }: Props) {
	return (
		<button disabled={disable} className={`${className} ${s.btn}`}>
			{children}
		</button>
	);
}
