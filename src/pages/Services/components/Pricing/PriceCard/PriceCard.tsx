import Button from "../../../../../components/Button/Button";
import HeaderH3 from "../../../../../components/HeadingH3/HeadingH3";
import s from "./PriceCard.module.scss";

type Props = {
	pricePacket: {
		level: string;
		price: string;
		service: string;
	};
};

export default function PriceCard({ pricePacket }: Props) {
	const { level, service, price } = pricePacket;

	return (
		<div className={s.container}>
			<HeaderH3 className={s.cardTitle}>{level}</HeaderH3>
			<div className={s.priceContainer}>
				<p className={s.priceText}>{price}</p>
				<p className={s.priceDetails}>{service}</p>
			</div>
			<Button className={s.priceBtn}>Buy packet</Button>
		</div>
	);
}
