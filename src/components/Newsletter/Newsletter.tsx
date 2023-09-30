import Button from "../Button/Button";
import HeaderH4 from "../HeadingH4/HeadingH4";
import Paragraph400 from "../Paragraph400/Paragraph400";
import s from "./Newsletter.module.scss";

type Props = {};

export default function Newsletter({}: Props) {
	return (
		<section className={`col-12 ${s.newsletter}`}>
			<div className={s.textWrapper}>
				<HeaderH4>Get notified when I publish new articles.</HeaderH4>
				<Paragraph400>Stay up to date with the latest news, announcements, and articles.</Paragraph400>
			</div>
			<div className={s.inputWrapper}>
				<input type="email" placeholder="Enter your email" className={s.inputNewsletter} />
				<Button className={s.btnNewsletter}>Subscribe</Button>
			</div>
		</section>
	);
}
