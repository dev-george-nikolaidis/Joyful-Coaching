import { MdEast } from "react-icons/md";
import { NavLink } from "react-router-dom";
import HeaderH4 from "../../../../components/HeadingH4/HeadingH4";
import Paragraph400 from "../../../../components/Paragraph400/Paragraph400";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { blogs } from "../../../../data/data";
import s from "./HomeBlog.module.scss";

type Props = {};

export default function HomeBlog({}: Props) {
	let displayBlogs = blogs.slice(0, 4).map((b, i) => {
		return (
			<div className={s.blogCardWrapper} key={i}>
				<figure className={s.blogImgWrapper}>
					<img src={b.urlImg} alt={b.title} className={s.blogImg} />
				</figure>
				<HeaderH4 className={s.blogHeader}>{b.title}</HeaderH4>
				<div className={s.textWrapper}>
					<Paragraph400 className={s.bogText}>{b.text}</Paragraph400>
				</div>

				<NavLink to={`/blog/${b.id}`} className={s.blogLink}>
					<span className={s.linkText}> Read more</span>
					<MdEast className={s.arrowIcon} />
				</NavLink>
			</div>
		);
	});

	return (
		<section className={s.blog}>
			<SectionTitle className={s.testimonialTitle}>
				<span className={s.titleTextSpan}>Inspiring</span> blog posts
			</SectionTitle>
			<div className={s.blogsWrapper}>{displayBlogs}</div>
		</section>
	);
}
