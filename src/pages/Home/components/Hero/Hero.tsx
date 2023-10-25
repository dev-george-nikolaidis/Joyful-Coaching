import { Link } from "react-router-dom";
import SuccessImg from "../../../../assets/img/success.svg";
import Button from "../../../../components/Button/Button";
import HeadingH1 from "../../../../components/HeaderH1/HeaderH1";
import Img from "../../../../components/Img/Img";
import Paragraph500 from "../../../../components/Paragraph500/Paragraph500";
import s from "./Hero.module.scss";

type Props = {};

export default function Hero({}: Props) {
	return (
		<div className={` ${s.hero} col-12`}>
			<section className={s.heroTextWrapper}>
				<HeadingH1>
					Live life at the <span className={s.titleSpanText}>full</span> potential.
				</HeadingH1>
				<Paragraph500 className={s.para}>
					I help people to discover their true potential and live a fulfilling life.Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin
					using backed by science. Wanna transform your life?
				</Paragraph500>
				<Link to="/booking">
					<Button>Book your session</Button>
				</Link>
			</section>
			<figure className={s.heroImgWrapper}>
				<Img src="https://res.cloudinary.com/dsrzlxnkc/image/upload/Joyful%20Coaching/home-hero_he7fnz.webp" alt="Natalia life Coach" className={s.heroImg} />
			</figure>
			<img src={SuccessImg} alt="100% success on improving your life" className={s.heroSuccessImg} />
		</div>
	);
}
