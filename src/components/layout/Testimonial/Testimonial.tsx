import ImageSlider from "../../ImageSlider/ImageSlider";
import SectionTitle from "../../SectionTitle/SectionTitle";
import s from "./Testimonial.module.scss";
type Props = {};

export default function Testimonial({}: Props) {
	return (
		<section className={s.testimonialsContainer}>
			<div className={` col-12 ${s.testimonialWrapper} `}>
				<SectionTitle className={s.testimonialTitle}>Hear out what my clients say about me</SectionTitle>
				<div className={s.sliderWrapper}>
					<ImageSlider />
				</div>
			</div>
		</section>
	);
}
