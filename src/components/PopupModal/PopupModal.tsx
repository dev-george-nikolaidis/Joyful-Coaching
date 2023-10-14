import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ActionTypes } from "../../context/Actions";
import { useGeneralContext } from "../../context/GeneralContext";
import Close from "../Close/Close";
import Modal from "../Modal/Modal";
import s from "./PopupModal.module.scss";

type Props = {
	children: ReactNode;
	popupModal?: boolean;
};

export default function PopupModal({ children, popupModal }: Props) {
	const {
		state: {},
		dispatch,
	} = useGeneralContext();

	const navigate = useNavigate();
	const closeModal = () => {
		document.body.style.overflow = "auto";

		if (popupModal) {
			dispatch({ type: ActionTypes.TOGGLE_POPUP_MODAL });
			navigate("/");
			return;
		}

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
