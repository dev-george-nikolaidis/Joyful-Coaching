import { myServices } from "../../../data/data";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Service from "../../Service/Service";
import s from "./ServicesLayout.module.scss";
type Props = {};

export default function ServicesLayout({}: Props) {
	const displayServices = myServices.map((s, i) => {
		return <Service service={s} key={i} />;
	});

	return (
		<section className={s.services}>
			<SectionTitle>My Services</SectionTitle>
			<div className={s.servicesWrapper}>{displayServices}</div>
		</section>
	);
}
