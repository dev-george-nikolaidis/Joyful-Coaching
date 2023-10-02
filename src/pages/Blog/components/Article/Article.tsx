import Paragraph500 from "../../../../components/Paragraph500/Paragraph500";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import s from "./Article.module.scss";

type Props = {
	blog: {
		id: number;
		title: string;
		urlImg: string;
		text: string;
	};
};

export default function Article({ blog }: Props) {
	const { id, title, urlImg, text } = blog;
	return (
		<div className={s.articleContainer}>
			<SectionTitle className={s.title}>{title}</SectionTitle>
			<figure>
				<img src={urlImg} alt={title} className={s.blogImg} />
			</figure>
			<Paragraph500 className={s.text}>{text}</Paragraph500>
		</div>
	);
}
