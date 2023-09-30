import { useState } from "react";
import { testimonials } from "../../data/data";
import Paragraph400 from "../Paragraph400/Paragraph400";
import s from "./ImageSlider.module.scss";

type Props = {};

export default function ImageSlider({}: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const { name, text, urlImg } = testimonials[currentIndex];

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	const arrowClicked = (direction: string) => {
		if (direction === "left") {
			setCurrentIndex(currentIndex >= 1 ? currentIndex - 1 : testimonials.length - 1);
			return;
		}
		setCurrentIndex(currentIndex <= testimonials.length - 2 ? currentIndex + 1 : 0);
	};

	let displayTheDots = testimonials.map((t, i) => {
		return <img src="http://127.0.0.1:5173/assets/dot.svg" alt={t.name} key={i} onClick={() => goToSlide(i)} className="dot" />;
	});

	return (
		<div className={s.testimonialContainer}>
			<img src={urlImg} alt={` The ${name} `} className={s.testimonialImg} />
			<span className={s.nameText}>{name}</span>
			<Paragraph400 className={s.testimonialText}>{text}</Paragraph400>
			<div className={s.dotsWrapper}>{displayTheDots}</div>
			<img src="http://127.0.0.1:5173/assets/left-arrow.svg" alt="" className={`${s.arrow} ${s.arrowLeft}`} onClick={() => arrowClicked("left")} />
			<img src="http://127.0.0.1:5173/assets/right-arrow.svg" alt="" className={`${s.arrow} ${s.arrowRight}`} onClick={() => arrowClicked("right")} />
		</div>
	);
}
