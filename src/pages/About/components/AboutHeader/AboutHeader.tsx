import HeaderH1 from "../../../../components/HeaderH1/HeaderH1";
import HeaderH4 from "../../../../components/HeaderH4/HeaderH4.";
import Paragraph400 from "../../../../components/Paragraph400/Paragraph400";
import s from "./AboutHeader.module.scss";
type Props = {};

export default function AboutHeader({}: Props) {
	return (
		<div className={`${s.aboutHeader} col-12`}>
			<div className={`${s.aboutTextWrapper} `}>
				<div className={s.aboutTextContainer}>
					<HeaderH1 className={s.title}>
						<span className={s.textTitleSpan}>Meet</span> Your Life Coach Natalia
					</HeaderH1>
					<Paragraph400 className={s.paragraphText}>
						I'm Natalia, and I'm here to help you on your journey of self-discovery and personal growth. Together, we'll set meaningful goals and overcome life's challenges, guiding you
						toward the life you desire. I'm passionate about empowering you to unlock your full potential.
					</Paragraph400>
					<div className={s.subTitleContainer}>
						<HeaderH4 className={s.subTitle}>Background</HeaderH4>
						<Paragraph400 className={s.subParagraphText}>
							My educational foundation is rooted in a Bachelor's degree in Psychology, which has provided me with a strong understanding of human behavior and the intricacies of the
							mind. This academic journey began as a reflection of my early interest in aiding individuals in navigating life's challenges.
						</Paragraph400>
					</div>
					<div className={s.subTitleContainer}>
						<HeaderH4 className={s.subTitle}>Experience</HeaderH4>
						<Paragraph400 className={s.subParagraphText}>
							I've accumulated over a decade of practical experience, starting as a counselor, where I offered support and guidance to individuals facing personal and emotional obstacles.
							This early role set the stage for my transition into life coaching, broadening my focus to encompass personal development, goal setting, and overall well-being. My
							experience extends across various aspects of life, including career development, relationship enhancement, stress management, and personal growth. My approach is
							characterized by empathy and non-judgment, making me a trusted partner on the transformative journeys of my clients.
						</Paragraph400>
					</div>
					<div className={s.subTitleContainer}>
						<HeaderH4 className={s.subTitle}>Qualifications</HeaderH4>
						<Paragraph400 className={s.subParagraphText}>
							I'm proud to hold certification as a professional life coach by the International Coach Federation (ICF). This certification underscores my commitment to maintaining the
							highest professional standards in the field, ensuring my clients are working with a qualified and dedicated practitioner. To stay current with the latest coaching techniques
							and methodologies, I regularly engage in ongoing professional development. I attend workshops, seminars, and training programs, valuing the power of continuous learning in
							delivering the best possible support to my clients.
						</Paragraph400>
					</div>
					<div className={s.subTitleContainer}>
						<HeaderH4 className={s.subTitle}>Passion for Life Coaching</HeaderH4>
						<Paragraph400 className={s.subParagraphText}>
							My passion for life coaching is the driving force behind my work. I find deep satisfaction in witnessing the personal growth and achievements of my clients. My purpose is to
							empower individuals to surmount challenges, unearth their life's purpose, and lead balanced, fulfilled lives. My mission is to facilitate meaningful changes, foster
							resilience, and unlock the full potential of those I work with. I employ a coaching style that blends compassion, positive psychology, and a strong belief in the unique
							potential of each individual. In essence, my biography is a testament to my unwavering dedication to the field of life coaching. My background, experience, qualifications,
							and passion converge to create a life coach who is both professionally competent and deeply committed to guiding individuals on their transformative journeys. With me as
							your life coach, you can trust that you are in the hands of a caring and capable mentor, ready to help you achieve your personal and professional goals.
						</Paragraph400>
					</div>
				</div>
				<figure className={s.imgWrapper}>
					<img src="https://res.cloudinary.com/dsrzlxnkc/image/upload/v1697880798/Joyful%20Coaching/about_fboxli.webp" alt="Natalia about me" className={s.aboutHederImg} />
				</figure>
			</div>
		</div>
	);
}
