import Navigation from "../../components/layout/Navigation/Navigation";
import ServicesLayout from "../../components/layout/ServicesLayout/ServicesLayout";
import s from "./Services.module.scss";
import ServicesHero from "./components/ServicesHero/ServicesHero";

type Props = {};

export default function Services({}: Props) {
	return (
		<div className={`col-12 ${s.services}`}>
			<Navigation />
			<ServicesHero />
			<ServicesLayout />
		</div>
	);
}
