import HeaderH4 from "../../../../components/HeadingH4/HeadingH4";
import Paragraph400 from "../../../../components/Paragraph400/Paragraph400";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { benefits } from "../../../../data/data";
import s from "./Benefits.module.scss";

type Props = {};

export default function Benefits({}: Props) {
	const displayBenefits = benefits.map((b, i) => {
		return (
			<div className={s.benefitsControl} key={i}>
				<HeaderH4 className={s.controlTitle}>{b.title}</HeaderH4>
				<Paragraph400>{b.body}</Paragraph400>
			</div>
		);
	});

	return (
		<section className={s.benefits}>
			<SectionTitle className={s.title}>Benefits of Life Coaching</SectionTitle>
			<div className={s.benefitsContainer}>{displayBenefits}</div>
		</section>
	);
}
