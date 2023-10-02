import Newsletter from "../../components/Newsletter/Newsletter";
import Companies from "../../components/layout/Companies/Companies";
import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import ServicesLayout from "../../components/layout/ServicesLayout/ServicesLayout";
import Testimonial from "../../components/layout/Testimonial/Testimonial";
import s from "./Home.module.scss";
import Hero from "./components/Hero/Hero";
import HomeBlog from "./components/HomeBlog/HomeBlog";

type Props = {};

export default function Home({}: Props) {
	return (
		<section className={` ${s.home} col-12`}>
			<Navigation />
			<Hero />
			<ServicesLayout />
			<Testimonial />
			<Companies />
			<HomeBlog />
			<Newsletter />
			<Footer />
		</section>
	);
}
