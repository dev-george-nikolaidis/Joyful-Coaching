import { useState } from "react";
import { ActionTypes } from "../../../context/Actions";
import { useGeneralContext } from "../../../context/GeneralContext";
import Close from "../../Close/Close";
import HeaderH3 from "../../HeadingH3/HeadingH3";
import Modal from "../../Modal/Modal";
import s from "./ThemeModal.module.scss";

type Props = {};

export default function ThemeModal({}: Props) {
	const [currentTheme, setCurrentTheme] = useState();

	const {
		state: {},
		dispatch,
	} = useGeneralContext();

	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.value);
	};
	const closeModal = () => {
		document.body.style.overflow = "auto";
		dispatch({ type: ActionTypes.OPEN_CLOSE_MODAL });
	};

	return (
		<Modal className={s.themeModal}>
			<div className={s.themeContainer}>
				<HeaderH3 className={s.themeModalTitle}>Please pick up a color theme.</HeaderH3>
				<form className={s.themeWrapper}>
					<div className={s.theme1Container}>
						<span className={s.theme1Name}>Light</span>
						<input type="radio" className={s.theme1Radio} value="light" checked={true} onChange={(e) => handlerChange(e)} />
					</div>
					<div className={s.theme1Container}>
						<span className={s.theme1Name}>Light2</span>
						<input type="radio" className={s.theme1Radio} value="light2" onChange={(e) => handlerChange(e)} />
					</div>
					<div className={s.theme1Container}>
						<span className={s.theme1Name}>Light3</span>
						<input type="radio" className={s.theme1Radio} value="light2" onChange={(e) => handlerChange(e)} />
					</div>
					<div className={s.theme1Container}>
						<span className={s.theme1Name}>Light4</span>
						<input type="radio" className={s.theme1Radio} value="light4" onChange={(e) => handlerChange(e)} />
					</div>
					<div className={s.theme1Container}>
						<span className={s.theme1Name}>Light5</span>
						<input type="radio" className={s.theme1Radio} value="light5" onChange={(e) => handlerChange(e)} />
					</div>
					<div className={s.theme1Container}>
						<span className={s.theme1Name}>Light6</span>
						<input type="radio" className={s.theme1Radio} value="light6" onChange={(e) => handlerChange(e)} />
					</div>
				</form>
				<span onClick={closeModal}>
					<Close redirect={false} />
				</span>
			</div>
		</Modal>
	);
}
