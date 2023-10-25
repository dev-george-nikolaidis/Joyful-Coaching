import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { prices } from "../../../../data/data";
import PriceCard from "./PriceCard/PriceCard";
import s from "./Pricing.module.scss";

type Props = {};

export default function Pricing({}: Props) {
	let displayPricingCards = prices.map((p, i) => {
		return <PriceCard pricePacket={p} key={i} />;
	});
	return (
		<section className={`col-12  ${s.pricing} `}>
			<SectionTitle className={s.pricingTitle}>
				<span className={s.titleSpanText}>Cost </span> of sessions
			</SectionTitle>
			<div className={s.pricingCardContainer}>{displayPricingCards}</div>
		</section>
	);
}
