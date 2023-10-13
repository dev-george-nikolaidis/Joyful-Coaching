import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/Button/Button";
import HeaderH3 from "../../../../../components/HeadingH3/HeadingH3";
import { ActionTypes } from "../../../../../context/Actions";
import { useGeneralContext } from "../../../../../context/GeneralContext";
import s from "./PriceCard.module.scss";

type Props = {
	pricePacket: {
		level: string;
		price: string;
		service: string;
		cost: number;
		amount: number;
	};
};

type PriceCardT = {
	level: string;
	price: string;
	service: string;
	cost: number;
	amount: number;
};

export default function PriceCard({ pricePacket }: Props) {
	const { level, service, price } = pricePacket;
	const {
		state: {},
		dispatch,
	} = useGeneralContext();
	const navigate = useNavigate();

	const handleClick = (p: PriceCardT) => {
		dispatch({ type: ActionTypes.PROCESSING_PAYMENT, payload: p });
		navigate("/appointment-buy");
	};

	return (
		<div className={s.container}>
			<HeaderH3 className={s.cardTitle}>{level}</HeaderH3>
			<div className={s.priceContainer}>
				<p className={s.priceText}>{price}</p>
				<p className={s.priceDetails}>{service}</p>
			</div>
			<div className={s.btnWrapper} onClick={() => handleClick(pricePacket)}>
				<Button className={s.priceBtn}>Buy packet</Button>
			</div>
		</div>
	);
}
