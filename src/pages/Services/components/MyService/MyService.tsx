import { MdLabelImportant } from "react-icons/md";
import SessionsImg from "../../../../assets/img/sessions.png";
import HeaderH4 from "../../../../components/HeadingH4/HeadingH4";
import Paragraph400 from "../../../../components/Paragraph400/Paragraph400";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { benefits } from "../../../../data/data";
import s from "./MyService.module.scss";
type Props = {};

export default function MyService({}: Props) {
	const displaySessionBenefits = benefits.map((b, i) => {
		return (
			<div key={i}>
				<div className={s.titleIconContainer}>
					<MdLabelImportant className={s.benefitsIcon} />
					<HeaderH4>{b.title}</HeaderH4>
				</div>
				<Paragraph400 className={s.paragraph}> {b.body}</Paragraph400>
			</div>
		);
	});
	return (
		<div className={s.myService}>
			<SectionTitle>
				<span className={s.titleSpanText}>Personalized</span> 1:1 Life Coaching sessions
			</SectionTitle>
			<div className={s.containerWrapper}>
				<div className={s.textContainer}>{displaySessionBenefits}</div>
				<figure className={s.imgWrapper}>
					<img src={SessionsImg} alt="" />
				</figure>
			</div>
		</div>
	);
}