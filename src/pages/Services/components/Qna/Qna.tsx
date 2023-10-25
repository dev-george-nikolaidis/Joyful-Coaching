import { Link } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import HeaderH4 from "../../../../components/HeaderH4/HeaderH4.";
import Paragraph400 from "../../../../components/Paragraph400/Paragraph400";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { questions } from "../../../../data/data";
import s from "./Qna.module.scss";
import QnaCard from "./QnaCard/QnaCard";

type Props = {};

export default function Qna({}: Props) {
	let displayQuestions = questions.map((q, i) => {
		return <QnaCard question={q} key={i} />;
	});
	return (
		<div className={s.qna}>
			<SectionTitle>
				<span className={s.titleTextSpan}> Frequently</span> questions asked
			</SectionTitle>
			<div className={s.qnaCardContainer}>{displayQuestions}</div>
			<Link to="/contact" className={s.contactWrapper}>
				<HeaderH4>Still have questions ?</HeaderH4>
				<Paragraph400 className={s.contactText}>Can’t find the answer you’re looking for? Please contact to our friendly team.</Paragraph400>
				<Button className={s.btnContact}>Contact us</Button>
			</Link>
		</div>
	);
}
