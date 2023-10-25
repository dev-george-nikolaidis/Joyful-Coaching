import ImageSlider from "../../ImageSlider/ImageSlider";
import SectionTitle from "../../SectionTitle/SectionTitle";
import s from "./Testimonial.module.scss";
type Props = {};

export default function Testimonial({}: Props) {
	return (
		<section className={`${s.testimonialsContainer} col-12`}>
			<div className={` ${s.testimonialWrapper} `}>
				<SectionTitle className={s.testimonialTitle}>
					Client <span className={s.titleSpanText}>success</span> stories
				</SectionTitle>
				<div className={s.sliderWrapper}>
					<ImageSlider />
				</div>
			</div>
		</section>
	);
}
