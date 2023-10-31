import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import Testimonial from "../../components/layout/Testimonial/Testimonial";
import s from "./Home.module.scss";
import Benefits from "./components/Benefits/Benefits";
import Hero from "./components/Hero/Hero";
import HomeBlog from "./components/HomeBlog/HomeBlog";
import ServicesHome from "./components/ServicesHome/ServicesHome";

type Props = {};

export default function Home({}: Props) {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	useEffect(() => {
		if (searchParams.toString() === "success=true") {
			navigate("/checkout-success");
		}
	}, []);

	return (
		<section className={` ${s.home} col-12`}>
			<Navigation />
			<Hero />
			<Benefits />
			<ServicesHome />
			<Testimonial />
			<HomeBlog />
			<Newsletter />
			<Footer />
		</section>
	);
}
