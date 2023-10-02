import Newsletter from "../../components/Newsletter/Newsletter";
import Companies from "../../components/layout/Companies/Companies";
import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import Testimonial from "../../components/layout/Testimonial/Testimonial";
import Qna from "../Services/components/Qna/Qna";
import "./About.module.scss";
import s from "./About.module.scss";
import AboutText from "./components/AboutText/AboutText";
type Props = {};

export default function About({}: Props) {
	return (
		<div className={`col-12 ${s.about}`}>
			<Navigation />
			<AboutText />
			<Testimonial />
			<Companies />
			<Qna />
			<Newsletter />
			<Footer />
		</div>
	);
}
