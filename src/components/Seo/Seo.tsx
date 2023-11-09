import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {
	children?: React.ReactNode;
	pageTitle: string;
	pagePath: string;
}

export default function Seo({ children, pageTitle, pagePath }: Props) {
	return (
		<Helmet prioritizeSeoTags>
			<title>Joyful Coaching | {pageTitle}</title>
			<link rel="canonical" href={pagePath} />
			<meta name="keywords" content="life coaching, personal growth, online appointments, joyful life, "></meta>
			<meta
				name="description"
				content="Unlock Your Full Potential with Life Coaching - Discover a more fulfilling and purpose-driven life with the guidance of our experienced life coach Natalia "
			/>

			{/* <!-- Open Graph Meta Tags (for social media sharing)  */}
			<meta property="og:title" content="Joyful Coaching - Your Path to a Better Life" />
			<meta property="og:description" content="Experience personalized life coaching services with Natalia. Discover a path to a more joyful and fulfilling life." />
			<meta property="og:image" content="https://res.cloudinary.com/dsrzlxnkc/image/upload/v1697980092/Joyful%20Coaching/home_j42nhw.webp" />
			<meta property="og:url" content="https://joyful-coaching.netlify.app" />
			<meta property="og:type" content="website" />

			{/* <!-- Twitter Meta Tags (for Twitter sharing) --> */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content="Joyful Coaching - Your Path to a Better Life" />
			<meta name="twitter:description" content="Experience personalized life coaching services with Natalia. Discover a path to a more joyful and fulfilling life" />
			<meta name="twitter:image" content="https://res.cloudinary.com/dsrzlxnkc/image/upload/v1697980092/Joyful%20Coaching/home_j42nhw.webp" />
			{children}
		</Helmet>
	);
}
