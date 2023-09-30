import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import ServicesLayout from "../../components/layout/ServicesLayout/ServicesLayout";
import s from "./Home.module.scss";
import Hero from "./components/Hero/Hero";
import HomeBlog from "./components/HomeBlog/HomeBlog";
import HomeTestimonial from "./components/HomeTestimonial/HomeTestimonial";

type Props = {};

export default function Home({}: Props) {
	return (
		<section className={` ${s.home} col-12`}>
			<Navigation />
			<Hero />
			<ServicesLayout />
			<HomeTestimonial />
			<HomeBlog />
			<Newsletter />
			<Footer />
		</section>
	);
}