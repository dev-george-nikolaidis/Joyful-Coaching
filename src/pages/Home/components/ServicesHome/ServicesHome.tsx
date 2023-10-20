import { MdLabelImportant } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import HeaderH4 from "../../../../components/HeadingH4/HeadingH4";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { services } from "../../../../data/data";
import s from "./ServicesHome.module.scss";
type Props = {};

export default function ServicesHome({}: Props) {
	const displayServices = services.map((ser, i) => {
		return (
			<div className={s.serviceContainer} key={i}>
				<MdLabelImportant className={s.serviceIcon} />
				<HeaderH4>{ser.title}</HeaderH4>
			</div>
		);
	});
	return (
		<div className={s.servicesHome}>
			<SectionTitle>
				How can I <span className={s.titleSpanText}>support</span> your goals
			</SectionTitle>
			<div className={s.servicesWrapper}>
				<figure>
					<img src="http://127.0.0.1:5173/assets/support1.jpg" alt="a woden art statue holds a tree  " className={s.supportImg} />
				</figure>
				<div className={s.servicesTextContainer}>
					{displayServices}
					<NavLink to="/services">
						<Button className={s.ghostButton}>Learn more</Button>
					</NavLink>
				</div>
			</div>
		</div>
	);
}
