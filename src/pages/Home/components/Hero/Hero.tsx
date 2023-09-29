import HeroImg from "../../../../assets/img/home-hero.png";
import SuccessImg from "../../../../assets/img/success.svg";
import Button from "../../../../components/Button/Button";
import HeadingH1 from "../../../../components/HeadingH1/HeadingH1";
import Paragraph500 from "../../../../components/Paragraph500/Paragraph500";
import "./Hero.scss";
type Props = {};

export default function Hero({}: Props) {
	return (
		<div className="col-12 hero">
			<section className="heroTextWrapper">
				<HeadingH1>Live life at the full potential.</HeadingH1>
				<Paragraph500 className="para">
					I help people to discover their true potential and live a fulfilling life.Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin
					using backed by science. Wanna transform your life?
				</Paragraph500>
				<Button>Book your session</Button>
			</section>
			<figure className="heroImgWrapper">
				<img src={HeroImg} alt="Natalia life Coach" className="heroImg" />
			</figure>
			<img src={SuccessImg} alt="100% success on improving your life" className="heroSuccessImg" />
		</div>
	);
}
