import Navigation from "../../components/layout/Navigation/Navigation";
import s from "./Blog.module.scss";

type Props = {};

export default function Blog({}: Props) {
	return (
		<section className={` col-12 ${s.blog}`}>
			<Navigation />
		</section>
	);
}
