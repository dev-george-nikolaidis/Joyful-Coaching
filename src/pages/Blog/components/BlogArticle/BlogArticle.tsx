import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../../../data/data";
import Article from "../../../BlogSinglePage/components/Article/Article";
import s from "./BlogArticle.module.scss";
type Props = {};

export default function BlogArticle({}: Props) {
	const [ currentBlogTitle, set currentBlogTitle] = useState(0);

	let { id } = useParams();

	const handlerClick = (id: number) => {
		set currentBlogTitle(id);
	};

	useEffect(() => {
		if (id) {
			set currentBlogTitle(Number(id));
		}
	}, []);

	return (
		<section className={s.blog}>
			<div className={s.blogWrapper}>
				<Article blog={blogs[ currentBlogTitle]} />
			</div>
		</section>
	);
}
