import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import Testimonial from "../../components/layout/Testimonial/Testimonial";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import s from "./Home.module.scss";
import Benefits from "./components/Benefits/Benefits";
import Hero from "./components/Hero/Hero";
import HomeBlog from "./components/HomeBlog/HomeBlog";
import ServicesHome from "./components/ServicesHome/ServicesHome";

type Props = {};

export default function Home({}: Props) {
	useScrollToTop();
	return (
		<section className={` ${s.home} col-12`}>
			<Navigation />
			<Hero />
			{/* <Companies /> */}
			<Benefits />
			<ServicesHome />
			{/* <ServicesLayout /> */}
			<Testimonial />
			<HomeBlog />
			<Newsletter />
			<Footer />
		</section>
	);
}
