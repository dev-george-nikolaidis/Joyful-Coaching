import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { prices } from "../../../../data/data";
import PriceCard from "./PriceCard/PriceCard";
import s from "./Pricing.module.scss";

type Props = {};

export default function Pricing({}: Props) {
	let displayPricingCards = prices.map((p, i) => {
		return (
			<span key={i}>
				<PriceCard pricePacket={p} />;
			</span>
		);
	});
	return (
		<section className={`col-12  ${s.pricing} `}>
			<SectionTitle className={s.pricingTitle}>Cost of sessions</SectionTitle>
			<div className={s.pricingCardContainer}>{displayPricingCards}</div>
		</section>
	);
}
