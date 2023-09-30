import HeaderH3 from "../HeadingH3/HeadingH3";
import Paragraph400 from "../Paragraph400/Paragraph400";
import s from "./Service.module.scss";

type Props = {
	service: {
		id: number;
		title: string;
		icon: string;
		text: string;
	};
};

export default function Service({ service }: Props) {
	const { icon, text, title } = service;
	return (
		<div className={s.serviceCardContainer}>
			<img src={icon} alt="" className={s.serviceIcon} />
			<HeaderH3 className={s.serviceTitle}>{title}</HeaderH3>
			<Paragraph400 className={s.serviceText}>{text}</Paragraph400>
		</div>
	);
}
