import { useState } from "react";
import SwapMinus from "../../../../../assets/img/swap-minus.svg";
import SwapPlus from "../../../../../assets/img/swap-plus.svg";
import Paragraph400 from "../../../../../components/Paragraph400/Paragraph400";
import Paragraph500 from "../../../../../components/Paragraph500/Paragraph500";
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

	let displayIcon = isPressed ? <img src={SwapMinus} className={s.icon} alt="" onClick={handlerClick} /> : <img src={SwapPlus} alt="" onClick={handlerClick} className={s.icon} />;

	return (
		<div className={s.qnaCard}>
			<div className={s.questionWrapper}>
				<Paragraph500 className={s.question}>{question.question}</Paragraph500>
				{displayIcon}
			</div>
			{isPressed && <Paragraph400 className={s.para}> {question.answer} </Paragraph400>}
		</div>
	);
}
