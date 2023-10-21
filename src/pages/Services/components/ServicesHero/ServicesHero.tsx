import HeaderH1 from "../../../../components/HeaderH1/HeaderH1";
import Paragraph500 from "../../../../components/Paragraph500/Paragraph500";
import s from "./ServicesHero.module.scss";
type Props = {};

export default function ServicesHero({}: Props) {
	return (
		<div className={` col-12 ${s.serviceHero} `}>
			<section className={s.heroTextWrapper}>
				<HeaderH1>
					I <span className={s.titleSpanText}> help</span> people to discover their true potential
				</HeaderH1>
				<Paragraph500 className={s.para}>
					I help people to discover their true potential and live a fulfilling life.Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin
					using backed by science. Wanna transform your life?
				</Paragraph500>
			</section>
			<figure className={s.heroImgWrapper}>
				<img src="https://res.cloudinary.com/dsrzlxnkc/image/upload/v1697880116/Joyful%20Coaching/services-hero_wtxeum.webp" alt="Natalia life Coach" className={s.heroImg} />
			</figure>
		</div>
	);
}
