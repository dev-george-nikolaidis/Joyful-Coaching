import Companies from "../../components/layout/Companies/Companies";
import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import s from "./Services.module.scss";
import Pricing from "./components/Pricing/Pricing";
import Qna from "./components/Qna/Qna";

import ServicesHero from "./components/ServicesHero/ServicesHero";

type Props = {};

export default function Services({}: Props) {
	return (
		<div className={`col-12 ${s.services}`}>
			<Navigation />
			<ServicesHero />
			<Pricing />
			<Companies />
			<Qna />
			<Footer />
		</div>
	);
}
