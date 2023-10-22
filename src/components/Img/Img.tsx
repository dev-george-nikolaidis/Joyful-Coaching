import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
	src: string;
	className?: string;
	alt?: string;
};

export default function Img({ src, className, alt }: Props) {
	return (
		<LazyLoadImage
			src={src}
			alt={alt}
			className={className}
			width={`100%`}
			height={`100%`}
			placeholderSrc="https://res.cloudinary.com/dsrzlxnkc/image/upload/v1697963694/Joyful%20Coaching/placeholder_xh49le.webp"
			effect="blur"
		/>
	);
}
