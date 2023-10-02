import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import s from "./Blog.module.scss";
import BlogArticle from "./components/BlogArticle/BlogArticle";

type Props = {};

export default function Blog({}: Props) {
	return (
		<section className={` col-12 ${s.blog}`}>
			<Navigation />
			<BlogArticle />
			<Newsletter />
			<Footer />
		</section>
	);
}
