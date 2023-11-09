import Seo from "../../components/Seo/Seo";
import Companies from "../../components/layout/Companies/Companies";
import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import "./About.module.scss";
import s from "./About.module.scss";
import AboutHeader from "./components/AboutHeader/AboutHeader";
type Props = {};

export default function About({}: Props) {
	useScrollToTop();
	return (
		<div className={`col-12 ${s.about}`}>
			<Seo pageTitle="About " pagePath="/about" />
			<Navigation />
			<AboutHeader />
			<Companies />
			{/* <Qna /> */}
			<Footer />
		</div>
	);
}
