import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderH4 from "../../../../components/HeadingH4/HeadingH4";
import Paragraph400 from "../../../../components/Paragraph400/Paragraph400";
import { blogs } from "../../../../data/data";
import Article from "../Article/Article";
import s from "./BlogArticle.module.scss";
type Props = {};

export default function BlogArticle({}: Props) {
	const [currentBlog, setCurrentBlog] = useState(0);

	let { id } = useParams();

	const handlerClick = (id: number) => {
		setCurrentBlog(id);
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		if (id) {
			setCurrentBlog(Number(id));
		}
	}, []);

	const displayBlogs = blogs
		.filter((b) => b.id !== currentBlog)
		.map((b, i) => {
			return (
				<div className={s.blogCardWrapper} key={i} onClick={() => handlerClick(b.id)}>
					<figure className={s.blogImgWrapper}>
						<img src={b.urlImg} alt="" className={s.blogImg} />
					</figure>
					<HeaderH4 className={s.blogHeader}>{b.title}</HeaderH4>
					<div className={s.textWrapper}>
						<Paragraph400 className={s.bogText}>{b.text}</Paragraph400>
					</div>
				</div>
			);
		});

	return (
		<section className={s.blog}>
			<div className={s.blogWrapper}>
				<Article blog={blogs[currentBlog]} />
			</div>
			<div className={s.articlesWrapper}>{displayBlogs}</div>
		</section>
	);
}
