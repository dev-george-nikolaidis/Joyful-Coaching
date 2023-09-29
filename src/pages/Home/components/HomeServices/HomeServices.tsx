import BookIcon from "../../../../assets/img/book.svg";
import Group from "../../../../assets/img/group.svg";
import Cloud from "../../../../assets/img/message.svg";
import HeaderH4 from "../../../../components/HeadingH3/HeadingH3";
import Paragraph400 from "../../../../components/Paragraph500/Paragraph500";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import "./HomeServices.scss";
type Props = {};

export default function HomeServices({}: Props) {
	// const displayServices = myServices.map((s, i) => {
	// 	return <Service service={s} key={i} img={<img src="../../assets/img/book.svg" alt="" />} />;
	// });

	return (
		<section className="services">
			<SectionTitle>My Services</SectionTitle>
			<div className="servicesWrapper">
				<div className="serviceCardContainer">
					<img src={BookIcon} alt="" className="serviceIcon" />
					<HeaderH4 className="serviceTitle">1:1 Coaching</HeaderH4>
					<Paragraph400 className="serviceText">
						During our one-to-one coaching sessions, we will delve deep into your current situation, explore your strengths and weaknesses, and identify any limiting beliefs or obstacles
						that may be holding you back ,and develop actionable strategies to overcome challenges and achieve success.
					</Paragraph400>
				</div>

				<div className="serviceCardContainer">
					<img src={Cloud} alt="" className="serviceIcon" />
					<HeaderH4 className="serviceTitle">Consultation</HeaderH4>
					<Paragraph400 className="serviceText">
						Consultation is a one-on-one session where you meet with a coach to discuss your goals, challenges, and aspirations. The coach will listen to your concerns, ask questions to
						gain clarity, and provide guidance and support to help you achieve your desired outcome.
					</Paragraph400>
				</div>

				<div className="serviceCardContainer">
					<img src={Group} alt="" className="serviceIcon" />
					<HeaderH4 className="serviceTitle">Guidance Sessions</HeaderH4>
					<Paragraph400 className="serviceText">
						Guidance sessions support in various aspects of their lives. It entails having meaningful discussions, actively listening to their concerns, and offering valuable insights
						and strategies to help them overcome challenges and achieve their goals.
					</Paragraph400>
				</div>
			</div>
		</section>
	);
}
