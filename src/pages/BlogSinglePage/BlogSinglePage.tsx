import { useState } from "react";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";
import HeaderH3 from "../../components/HeaderH3/HeaderH3";
import HeaderH4 from "../../components/HeaderH4/HeaderH4.";
import Img from "../../components/Img/Img";
import Paragraph400 from "../../components/Paragraph400/Paragraph400";
import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import { useGeneralContext } from "../../context/GeneralContext";
import { blogs } from "../../data/data";
import s from "./BlogSinglePage.module.scss";
import Article from "./components/Article/Article";

type Props = {};

export default function BlogSinglePage({}: Props) {
	const {
		state: { currentBlogTitle },
	} = useGeneralContext();

	const [blog, setBlog] = useState(blogs.find((b) => b.title === currentBlogTitle));
	const [filteredBlogs, setFilteredBlog] = useState(blogs.filter((b) => b.title != currentBlogTitle));

	const [currentIndex, setCurrentIndex] = useState(0);
	const [_currentSlideBlog, setCurrentSlideBlog] = useState(filteredBlogs[currentIndex]);

	function changeCurrentBlogTitle(title: string) {
		setBlog(blogs.find((b) => b.title === title));
		setFilteredBlog(blogs.filter((b) => b.title != title));
		window.scrollTo(0, 0);
		// setCurrentSlideBlog(filteredBlogs[currentIndex]);
	}

	// const goToSlide = (slideIndex: number, title: string) => {
	// 	setCurrentSlideBlog(filteredBlogs[slideIndex]);
	// 	// setFilteredBlog(blogs.filter((b) => b.title != title));
	// };

	const arrowClicked = (direction: string) => {
		if (direction === "left") {
			setCurrentIndex(currentIndex >= 1 ? currentIndex - 1 : filteredBlogs.length - 1);
			setCurrentSlideBlog(filteredBlogs[currentIndex]);
			return;
		}
		setCurrentIndex(currentIndex <= filteredBlogs.length - 2 ? currentIndex + 1 : 0);
		setCurrentSlideBlog(filteredBlogs[currentIndex]);
	};
	const displayBlogsSlider = (
		<div className={s.blogCardWrapper} onClick={() => changeCurrentBlogTitle(filteredBlogs[currentIndex].title)}>
			<figure className={s.blogImgWrapper}>
				<Img src={filteredBlogs[currentIndex].urlImg} alt="" className={s.blogImg} />
			</figure>
			<HeaderH4 className={s.blogHeader}>{filteredBlogs[currentIndex]?.title}</HeaderH4>
			<div className={s.textWrapper}>
				<Paragraph400 className={s.bogText}>{filteredBlogs[currentIndex]?.text}</Paragraph400>
			</div>
		</div>
	);

	// let displayTheDots = filteredBlogs.map((t, i) => {
	// 	return <div key={t.id + i} onClick={() => goToSlide(i, t.title)} className={` ${s.dot} `}></div>;
	// });

	return (
		<div className={`${s.blogSinglePage} col-12`}>
			<Navigation />
			<div className={s.blogSinglePageWrapper}>
				<Article blog={blog!} />
				<div className={s.blogWrapper}>
					<HeaderH3 className={s.sectionTitle}>
						<span className={s.textSpanTitle}>Explore</span> More Blog Posts
					</HeaderH3>
					{displayBlogsSlider}
					{/* <div className={s.dotsWrapper}>{displayTheDots}</div> */}
					<MdArrowCircleLeft className={`${s.arrow} ${s.arrowLeft}`} onClick={() => arrowClicked("left")} />
					<MdArrowCircleRight className={`${s.arrow} ${s.arrowRight}`} onClick={() => arrowClicked("right")} />
				</div>
			</div>
			<Footer />
		</div>
	);
}
