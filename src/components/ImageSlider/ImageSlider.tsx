import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
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
		return <div key={t.id + i} onClick={() => goToSlide(i)} className={` ${s.dot} `}></div>;
	});

	return (
		<div className={s.testimonialContainer}>
			<img src={urlImg} alt={` The ${name} `} className={s.testimonialImg} />
			<span className={s.nameText}>{name}</span>
			<Paragraph400 className={s.testimonialText}>{text}</Paragraph400>
			<div className={s.dotsWrapper}>{displayTheDots}</div>
			<MdArrowBack className={`${s.arrow} ${s.arrowLeft}`} onClick={() => arrowClicked("left")} />
			<MdArrowForward className={`${s.arrow} ${s.arrowRight}`} onClick={() => arrowClicked("right")} />
		</div>
	);
}
