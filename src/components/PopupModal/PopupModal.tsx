import { ReactNode } from "react";
import { ActionTypes } from "../../context/Actions";
import { useGeneralContext } from "../../context/GeneralContext";
import Close from "../Close/Close";
import Modal from "../Modal/Modal";
import s from "./PopupModal.module.scss";

type Props = {
	children: ReactNode;
};

export default function PopupModal({ children }: Props) {
	const {
		state: {},
		dispatch,
	} = useGeneralContext();

	const closeModal = () => {
		document.body.style.overflow = "auto";
		dispatch({ type: ActionTypes.OPEN_CLOSE_MODAL });
	};
	return (
		<Modal className={s.popupModal}>
			<div className={s.popupContainer}>
				{children}
				<span onClick={closeModal}>
					<Close redirect={false} />
				</span>
			</div>
		</Modal>
	);
}
