import Seo from "../../components/Seo/Seo";
import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import s from "./Services.module.scss";
import MyService from "./components/MyService/MyService";
import Pricing from "./components/Pricing/Pricing";
import Qna from "./components/Qna/Qna";

import ServicesHero from "./components/ServicesHero/ServicesHero";

type Props = {};

export default function Services({}: Props) {
	useScrollToTop();
	return (
		<div className={`col-12 ${s.services}`}>
			<Seo pageTitle="Services " pagePath="/services" />
			<Navigation />
			<ServicesHero />
			<MyService />
			<Pricing />
			<Qna />
			<Footer />
		</div>
	);
}
