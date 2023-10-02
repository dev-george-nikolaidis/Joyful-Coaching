import s from "./RegisterButton.module.scss";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function RegisterButton({ children, className }: Props) {
	return (
		<button className={`${className} ${s.btn}`}>
			<span></span>
			{children}
		</button>
	);
}
