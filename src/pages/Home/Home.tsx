import Navigation from "../../components/layout/Navigation/Navigation";
import "./Home.scss";
import Hero from "./components/Hero/Hero";
import HomeServices from "./components/HomeServices/HomeServices";
import HomeTestimonial from "./components/HomeTestimonial/HomeTestimonial";

type Props = {};

export default function Home({}: Props) {
	return (
		<section className="col-12 home">
			<Navigation />
			<Hero />
			<HomeServices />
			<HomeTestimonial />
		</section>
	);
}
