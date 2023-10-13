import s from "./Button.module.scss";
type Props = {
	children: React.ReactNode;
	className?: string;
	props?: Props;
	isDisabled?: boolean;
};

export default function Button({ children, className, props, isDisabled }: Props) {
	return (
		<button {...props} disabled={isDisabled} className={`${className} ${s.btn}`}>
			{children}
		</button>
	);
}
