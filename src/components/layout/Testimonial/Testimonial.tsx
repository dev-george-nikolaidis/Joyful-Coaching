import HeaderH3 from "../../HeadingH3/HeadingH3";
import ImageSlider from "../../ImageSlider/ImageSlider";
import s from "./Testimonial.module.scss";
type Props = {};

export default function Testimonial({}: Props) {
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
