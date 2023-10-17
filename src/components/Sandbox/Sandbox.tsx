// HeroSection.tsx

import style from "./Sandbox.module.scss";

export default function Sandbox() {
	// 	const benefits = [
	// 		{
	// 			icon: "icon-1.png", // Replace with the actual icon filename or URL
	// 			title: "Personalized Coaching",
	// 			description: "Tailored coaching to meet your individual needs.",
	// 		},
	// 		{
	// 			icon: "icon-2.png", // Replace with the actual icon filename or URL
	// 			title: "Professional Guidance",
	// 			description: "Expert guidance from certified life coaches.",
	// 		},
	// 		{
	// 			icon: "icon-3.png", // Replace with the actual icon filename or URL
	// 			title: "Goal Achievement",
	// 			description: "Empowering you to reach your life goals.",
	// 		},
	// 	];

	// 	return (
	// 		<section className={style.benefitSection}>
	// 			<div className={style.benefitContainer}>
	// 				{benefits.map((benefit, index) => (
	// 					<div key={index} className={style.benefitItem}>
	// 						<img src={benefit.icon} alt={`Icon ${index + 1}`} className={style.benefitIcon} />
	// 						<h3 className={style.benefitTitle}>{benefit.title}</h3>
	// 						<p className={style.benefitDescription}>{benefit.description}</p>
	// 					</div>
	// 				))}
	// 			</div>
	// 		</section>
	// 	);
	// }

	const benefits = [
		{
			icon: "icon-1.png", // Replace with the actual icon filename or URL
			title: "Personalized Coaching",
			description: "Receive personalized coaching tailored to your individual needs and goals.",
		},
		{
			icon: "icon-2.png", // Replace with the actual icon filename or URL
			title: "Professional Guidance",
			description: "Get expert guidance from certified life coaches with years of experience.",
		},
		{
			icon: "icon-3.png", // Replace with the actual icon filename or URL
			title: "Goal Achievement",
			description: "Empower yourself to set and achieve meaningful life goals and milestones.",
		},
		{
			icon: "icon-4.png", // Replace with the actual icon filename or URL
			title: "Positive Mindset",
			description: "Develop a positive mindset to overcome challenges and live a happier life.",
		},
		{
			icon: "icon-5.png", // Replace with the actual icon filename or URL
			title: "Work-Life Balance",
			description: "Achieve a healthier work-life balance for greater overall well-being.",
		},
		{
			icon: "icon-6.png", // Replace with the actual icon filename or URL
			title: "Stress Management",
			description: "Learn effective stress management techniques for a more relaxed life.",
		},
	];

	return (
		<section className={style.benefitSection}>
			<div className={style.benefitContainer}>
				{benefits.map((benefit, index) => (
					<div key={index} className={style.benefitItem}>
						<img src={benefit.icon} alt={`Icon ${index + 1}`} className={style.benefitIcon} />
						<h3 className={style.benefitTitle}>{benefit.title}</h3>
						<p className={style.benefitDescription}>{benefit.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
