import { NavLink } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import HeaderH3 from "../../../../components/HeadingH3/HeadingH3";
import HeaderH4 from "../../../../components/HeadingH4/HeadingH4";
import Paragraph400 from "../../../../components/Paragraph400/Paragraph400";
import { blogs } from "../../../../data/data";
import s from "./HomeBlog.module.scss";

type Props = {};

export default function HomeBlog({}: Props) {
	let displayBlogs = blogs.slice(0, 3).map((b, i) => {
		return (
			<NavLink to={`/blog/${b.id}`} className={s.blogLink} key={i}>
				<div className={s.blogCardWrapper}>
					<figure className={s.blogImgWrapper}>
						<img src={b.urlImg} alt={b.title} className={s.blogImg} />
					</figure>
					<HeaderH4 className={s.blogHeader}>{b.title}</HeaderH4>
					<div className={s.textWrapper}>
						<Paragraph400 className={s.bogText}>{b.text}</Paragraph400>
					</div>
				</div>
			</NavLink>
		);
	});

	return (
		<section className={s.blog}>
			<HeaderH3 className={s.testimonialTitle}>Stay Motivated, read the weekly blog articles.</HeaderH3>
			<div className={s.blogsWrapper}>{displayBlogs}</div>
			<NavLink to="/blog" end className={s.blogLink}>
				<Button className={s.btnBlog}>Go to articles</Button>
			</NavLink>
		</section>
	);
}
