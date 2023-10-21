import { useParams } from "react-router-dom";
import { blogs } from "../../data/data";
import Article from "../Blog/components/Article/Article";
import s from "./BlogSinglePage.module.scss";

type Props = {};

export default function BlogSinglePage({}: Props) {
	let { id } = useParams();

	const currentBlog = blogs.find((b) => b.id === Number(id))!;
	return (
		<div className={s.test}>
			<Article blog={currentBlog} />
		</div>
	);
}
