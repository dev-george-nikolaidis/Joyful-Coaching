import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import s from "./Blog.module.scss";
import BlogBody from "./components/BlogBody/BlogBody";

type Props = {};

export default function Blog({}: Props) {
	useScrollToTop();
	return (
		<section className={` col-12 ${s.blog}`}>
			<Navigation />
			<BlogBody />
			<Footer />
		</section>
	);
}
