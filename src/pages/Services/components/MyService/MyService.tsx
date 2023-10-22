import { MdLabelImportant } from "react-icons/md";
import HeaderH4 from "../../../../components/HeaderH4/HeaderH4.";
import Img from "../../../../components/Img/Img";
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
					<Img src="https://res.cloudinary.com/dsrzlxnkc/image/upload/v1697880142/Joyful%20Coaching/session-packet_ag84qf.webp" alt="Colorful session room" />
				</figure>
			</div>
		</div>
	);
}
