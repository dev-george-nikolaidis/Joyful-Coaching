import "./Service.scss";
type Props = {
	service: {
		id: number;
		title: string;
		icon: string;
		text: string;
	};
};

export default function Service({ service }: Props) {
	const { icon, text, title } = service;
	// todo fix the bug with require with vite react and typescript and make service dynamic
	return (
		<div className="serviceCardContainer">
			<img src="" alt="" />
			<h4 className="serviceTitle">{title}</h4>
			<p className="serviceText"> {text}</p>
		</div>
	);
}
