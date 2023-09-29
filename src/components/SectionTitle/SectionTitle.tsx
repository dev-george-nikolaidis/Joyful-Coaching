import "./SectionTitle.scss";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function SectionTitle({ children, className }: Props) {
	return <h4 className={` title ${className}`}>{children}</h4>;
}
