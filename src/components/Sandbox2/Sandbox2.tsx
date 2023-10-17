import style from "./Sandbox2.module.scss";

type Props = {};

export default function Sandbox2({}: Props) {
	const features = [
		{
			icon: "icon-1.png", // Replace with the actual icon filename or URL
			title: "Holistic Approach",
			description: "We address all aspects of your life for balanced well-being.",
		},
		{
			icon: "icon-2.png", // Replace with the actual icon filename or URL
			title: "Personalized Guidance",
			description: "Customized coaching to meet your unique needs and goals.",
		},
		{
			icon: "icon-3.png", // Replace with the actual icon filename or URL
			title: "Positive Mindset",
			description: "Develop a positive outlook to overcome challenges.",
		},
		{
			icon: "icon-4.png", // Replace with the actual icon filename or URL
			title: "Stress Management",
			description: "Learn effective stress management techniques.",
		},
	];

	return (
		<section className={style.featureSection}>
			<div className={style.featureContainer}>
				{features.map((feature, index) => (
					<div key={index} className={style.featureItem}>
						<img src={feature.icon} alt={`Icon ${index + 1}`} className={style.featureIcon} />
						<h3 className={style.featureTitle}>{feature.title}</h3>
						<p className={style.featureDescription}>{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
