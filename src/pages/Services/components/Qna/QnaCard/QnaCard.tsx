import { useState } from "react";
import { MdOutlineControlPoint, MdSettingsBackupRestore } from "react-icons/md";
import HeaderH4 from "../../../../../components/HeaderH4/HeaderH4.";
import Paragraph400 from "../../../../../components/Paragraph400/Paragraph400";
import s from "./QnaCard.module.scss";
type Props = {
	question: {
		question: string;
		answer: string;
	};
};

export default function QnaCard({ question }: Props) {
	const [isPressed, setIsPressed] = useState(false);

	const handlerClick = () => {
		setIsPressed(!isPressed);
	};

	let displayIcon = isPressed ? <MdSettingsBackupRestore className={s.icon} onClick={handlerClick} /> : <MdOutlineControlPoint className={s.icon} onClick={handlerClick} />;

	return (
		<div className={s.qnaCard}>
			<div className={s.questionWrapper}>
				<HeaderH4 className={s.question}>{question.question}</HeaderH4>
				{displayIcon}
			</div>
			{isPressed && <Paragraph400 className={s.para}> {question.answer} </Paragraph400>}
		</div>
	);
}
