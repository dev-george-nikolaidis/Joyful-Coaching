import HeaderH1 from "../../../../components/HeadingH1/HeadingH1";
import Paragraph500 from "../../../../components/Paragraph500/Paragraph500";
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
			<HeaderH1 className={s.title}>{title}</HeaderH1>
			<figure>
				<img src={urlImg} alt={title} className={s.blogImg} />
			</figure>
			<Paragraph500 className={s.text}>{text.split(/(?:\r?\n)+/)}</Paragraph500>
		</div>
	);
}
