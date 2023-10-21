import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../../../data/data";
import Article from "../Article/Article";
import s from "./BlogArticle.module.scss";
type Props = {};

export default function BlogArticle({}: Props) {
	const [currentBlog, setCurrentBlog] = useState(0);

	let { id } = useParams();

	const handlerClick = (id: number) => {
		setCurrentBlog(id);
	};

	useEffect(() => {
		if (id) {
			setCurrentBlog(Number(id));
		}
	}, []);

	return (
		<section className={s.blog}>
			<div className={s.blogWrapper}>
				<Article blog={blogs[currentBlog]} />
			</div>
		</section>
	);
}
