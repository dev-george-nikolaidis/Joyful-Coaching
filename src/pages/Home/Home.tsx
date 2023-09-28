import Navigation from "../../components/layout/Navigation/Navigation";
import "./Home.scss";
import Hero from "./components/Hero/Hero";

type Props = {};

export default function Home({}: Props) {
	return (
		<section className="col-12 home">
			<Navigation />
			<Hero />
		</section>
	);
}
