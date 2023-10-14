import { useGeneralContext } from "../../context/GeneralContext";
import s from "./ButtonCancel.module.scss";

type Props = {
	children: React.ReactNode;
	className?: string;
	isDisabled?: boolean;
};

export default function ButtonCancel({ children, className, isDisabled }: Props) {
	const {} = useGeneralContext();
	return (
		<button disabled={isDisabled} className={`${className} ${s.btn}`}>
			{children}
		</button>
	);
}
