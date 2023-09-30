import HeaderH3 from "../../../../components/HeadingH3/HeadingH3";
import ImageSlider from "../../../../components/ImageSlider/ImageSlider";
import s from "./HomeTestimonial.module.scss";
type Props = {};

export default function HomeTestimonial({}: Props) {
	return (
		<section className={s.testimonialsContainer}>
			<div className={` col-12 ${s.testimonialWrapper} `}>
				<HeaderH3 className={s.testimonialTitle}>Hear out what my clients say about me.</HeaderH3>
				<div className={s.sliderWrapper}>
					<ImageSlider />
				</div>
			</div>
		</section>
	);
}
