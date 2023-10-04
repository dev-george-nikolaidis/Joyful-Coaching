import NataliaImg from "../../../../assets/img/about.svg";
import HeaderH3 from "../../../../components/HeadingH3/HeadingH3";
import Paragraph500 from "../../../../components/Paragraph500/Paragraph500";
import { aboutStory } from "../../../../data/data";
import s from "./AboutText.module.scss";
type Props = {};

export default function AboutText({}: Props) {
	const {
		title,
		body: { text_1, text_2, text_3, text_4, text_5, text_6, text_7, text_8 },
	} = aboutStory;
	return (
		<div className={`${s.aboutText} col-12`}>
			<div className={`${s.aboutTextWrapper} `}>
				<div className={s.aboutTextContainer}>
					<HeaderH3 className={s.title}>{title}</HeaderH3>
					<Paragraph500 className={s.paragraphText}> {text_1} </Paragraph500>
					<Paragraph500 className={s.paragraphText}> {text_2} </Paragraph500>
					<Paragraph500 className={s.paragraphText}> {text_3} </Paragraph500>
					<Paragraph500 className={s.paragraphText}> {text_4} </Paragraph500>
					<Paragraph500 className={s.paragraphText}> {text_5} </Paragraph500>
					<Paragraph500 className={s.paragraphText}> {text_6} </Paragraph500>
					<Paragraph500 className={s.paragraphText}> {text_7} </Paragraph500>
				</div>
				<figure className={s.imgWrapper}>
					<img src={NataliaImg} alt="Natalia about me" className={s.img} />
				</figure>
			</div>
		</div>
	);
}
