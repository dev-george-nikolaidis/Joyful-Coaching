import HeaderH2 from "../../../../components/HeaderH2/HeaderH2";
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
	return (
		<div className={s.articleContainer}>
			<div className={s.articleWrapper}>
				<HeaderH2 className={s.title}>{blog?.title}</HeaderH2>
				<figure>
					<img src={blog?.urlImg} alt={blog?.title} className={s.blogImg} />
				</figure>
				<Paragraph500 className={s.text}>{blog?.text.split(/(?:\r?\n)+/)}</Paragraph500>
			</div>
		</div>
	);
}
