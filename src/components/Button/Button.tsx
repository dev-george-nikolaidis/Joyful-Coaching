import s from "./Button.module.scss";
type Props = {
	children: React.ReactNode;
	className?: string;
	isDisabled?: boolean;
};

export default function Button({ children, className, isDisabled }: Props) {
	return (
		<button disabled={isDisabled} className={`${className} ${s.btn}`}>
			{children}
		</button>
	);
}
