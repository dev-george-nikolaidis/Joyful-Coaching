import { useGeneralContext } from "../../context/GeneralContext";
import s from "./Modal.module.scss";
type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function Modal({ children, className }: Props) {
	const {
		state: { isModalOpen },
	} = useGeneralContext();

	if (isModalOpen) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}

	return <div className={`${className} ${s.modal}`}>{children}</div>;
}
