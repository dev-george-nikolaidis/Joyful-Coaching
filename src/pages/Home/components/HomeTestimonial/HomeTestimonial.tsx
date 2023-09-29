import HeaderH3 from "../../../../components/HeadingH3/HeadingH3";
import "./HomeTestimonial.scss";
type Props = {};

export default function HomeTestimonial({}: Props) {
	return (
		<section className="testimonialsContainer">
			<HeaderH3 className="testimonialTitle">Hear out what my clients say about me</HeaderH3>
			<div className="carouselWrapper"></div>
		</section>
	);
}
