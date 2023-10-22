import { Link } from "react-router-dom";
import HeaderH2 from "../../../../components/HeaderH2/HeaderH2";
import HeaderH4 from "../../../../components/HeaderH4/HeaderH4.";
import Img from "../../../../components/Img/Img";
import Paragraph400 from "../../../../components/Paragraph400/Paragraph400";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { ActionTypes } from "../../../../context/Actions";
import { useGeneralContext } from "../../../../context/GeneralContext";
import { blogs } from "../../../../data/data";
import s from "./BlogBody.module.scss";

type Props = {};
//
export default function BlogBody({}: Props) {
	const { dispatch } = useGeneralContext();

	const handlerClick = (title: string) => {
		dispatch({ type: ActionTypes.UPDATE_CURRENT_BLOG, payload: title });
	};

	const displayBlogs = blogs.map((b, i) => {
		return (
			<Link to={`/blog/post/${b.id}`} className={s.blogCardWrapper} key={i} onClick={() => handlerClick(b.title)}>
				<figure className={s.blogImgWrapper}>
					<Img src={b.urlImg} alt="" className={s.blogImg} />
				</figure>
				<HeaderH4 className={s.blogHeader}>{b.title}</HeaderH4>
				<div className={s.textWrapper}>
					<Paragraph400 className={s.bogText}>{b.text}</Paragraph400>
				</div>
			</Link>
		);
	});
	return (
		<div className={s.blogBody}>
			<div className={s.heroSection}>
				<Img className={s.heroBackgroundImg} src="https://res.cloudinary.com/dsrzlxnkc/image/upload/v1697898906/Joyful%20Coaching/blog-hero-2_gji2pk.webp" alt="" />
				<div className={s.textContainer}>
					<HeaderH2 className={s.title}>
						<span className={s.titleTextSpan}>Explore </span>insights and inspiration with Natalia's blog
					</HeaderH2>
				</div>
			</div>
			<div className={s.blogsSection}>
				<SectionTitle>
					<span className={s.spanSectionTitle}>Recent</span> blog articles
				</SectionTitle>
				<div className={s.articlesWrapper}>{displayBlogs}</div>
			</div>
		</div>
	);
}
